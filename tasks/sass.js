'use strict';

/**
 * Compile sass
 */

var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var sass    = require('gulp-sass');

module.exports = function () {
  return gulp.src('public/styles/app.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/styles/css'));
};
