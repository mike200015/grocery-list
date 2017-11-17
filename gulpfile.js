'use strict';

var gulp = require('gulp');

gulp.task('default',    ['inject']);
gulp.task('inject',     ['sass'],     require('./tasks/inject'));
gulp.task('sass',                     require('./tasks/sass'));
gulp.task('build',                    require('./tasks/build'));

