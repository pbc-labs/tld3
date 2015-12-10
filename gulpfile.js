var gulp = require('gulp');
var eslint = require('gulp-eslint');
var gutil = require("gulp-util");
var shell = require('gulp-shell');
var mocha = require('gulp-mocha');
var del = require('del');
var webpack = require("webpack");
// var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var myTestConfig = require("./webpack.test.config.js");

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
  return gulp.src(['src/*.js', 'src/**/*.js', '!test/testBundle.js', 'test/**/*.js', 'test/tests.js', '!node_modules/**', '!bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint-strict', function () {
  return gulp.src(['src/*.js', 'src/**/*.js', 'test/**/*.js', 'test/tests.js', '!test/testBundle.js', '!node_modules/**', '!bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Run mocha tests on compiled files
gulp.task('test', ["webpack:build-dev", "webpack:build-test"], function () {
 return gulp.src('test/testBundle.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec'}));
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compilers to allow caching
var testCompiler = webpack(myTestConfig);
var devCompiler = webpack(myDevConfig);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["lint", "webpack:build-dev", "webpack:build-test"], function() {
	gulp.watch(["src/**/*", "test/unit-tests/*.js"], ["lint", "webpack:build-dev", "webpack:build-test", "test"]);
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

gulp.task("webpack:build-test", ['lint'], function (callback) {

  testCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-test", err);
    gutil.log("[webpack:build-test]", stats.toString({
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
