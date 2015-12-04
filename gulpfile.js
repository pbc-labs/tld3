var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');
var del = require('del');

//Lint files using Airbnb config ESLinter
gulp.task('lint', ['clean'], function () {
  return gulp.src(['src/*.js', 'test/*.js', '!node_modules/**', '!bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


// Compile src files into ES5
gulp.task('babel:src', ['lint'], function () {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('src/legacy'));
});

// Compile test files into ES5
gulp.task('babel:test', ['lint'], function () {
  return gulp.src('test/*.js')
    .pipe(babel())
    .pipe(gulp.dest('test/legacy'));
});

gulp.task('babel', ['babel:src', 'babel:test']);

// Run mocha tests on compiled files
gulp.task('mocha', ['lint', 'babel'], function () {
 return gulp.src('test/legacy/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});

// Remove built es5 and test files
gulp.task('clean', function () {
    return del(['src/legacy/*.js', 'test/legacy/*.js']);
});

gulp.task('default', ['clean', 'lint', 'babel', 'mocha'], function() {
  console.log('All done!');
});
