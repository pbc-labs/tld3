var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');

//Lint files using Airbnb config ESLinter
gulp.task('lint', function () {
  return gulp.src(['src/*.js', '!node_modules/**', '!bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Compile files into ES5
gulp.task('babel', ['lint'], function () {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('test'));
});

// Run mocha tests on compiled files
gulp.task('mocha', ['lint', 'babel'], function () {
 return gulp.src('test/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});

// Watch files for changes
gulp.task('watch', function () {
    gulp.watch('src/*.js');
});

gulp.task('default', ['lint', 'babel', 'mocha'], function() {
});