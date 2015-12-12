var gulp = require('gulp');
var eslint = require('gulp-eslint');
var gutil = require("gulp-util");
var shell = require('gulp-shell');
var mocha = require('gulp-mocha');
var del = require('del');
var webpack = require("webpack");
var babel = require('babel-register');
// var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

// should run on precommit if in production
gulp.task('default', ['clean', 'lint-strict', 'build', 'test', 'doc', 'stage'], function() {
  console.log('Staged all changes');
});

// run jsDoc on all src files
gulp.task('doc', ['test'], shell.task([
  './node_modules/.bin/jsdoc ./src/*.js -t ./node_modules/ink-docstrap/template -c ./node_modules/jsdoc/gen.json',
  './node_modules/.bin/docco ./src/*.js -o docs/docco'
]));

//Lint files using Airbnb config ESLinter
gulp.task('lint', function () {
  return gulp.src(['src/*.js', 'src/**/*.js', 'test/**/*.js', '!node_modules/**', '!bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint-strict', function () {
  return gulp.src(['src/*.js', 'src/**/*.js', 'test/**/*.js', '!node_modules/**', '!bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Run mocha tests on compiled files
gulp.task('test', ["webpack:build-dev"], function () {
 return gulp.src('test/**/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec',
                      compilers: {
                             js: babel
                         }}));
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["lint", "webpack:build-dev", "test"], function() {
	gulp.watch(["src/**/*", "test/**/*.js"], ["lint", "webpack:build-dev","test"]);
});


gulp.task("webpack:build-dev", ['lint'], function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});


});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
  if (myConfig.plugins) {
    myConfig.plugins = myConfig.plugins.concat(
  		new webpack.DefinePlugin({
  			"process.env": {
  				// This has effect on the react lib size
  				"NODE_ENV": JSON.stringify("production")
  			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	)};

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});

});
