'use strict';

var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    input  = {
      'html': 'src/**/*.html',
      'sass': 'src/css/**/*.scss',
      'typescript': 'src/**/*.ts'
    },

    output = {
      'html': 'dist',
      'css': 'dist/css',
      'js': 'dist'
    },

    options = {
      sass: {
        outputStyle: (gutil.env.type === 'production')? 'compressed' : 'uncompressed'
      }
    }

gulp.task('default', ['build-js', 'build-css', 'copy-html']);

gulp.task('build-css', function() {
    return gulp.src(input.sass)
        .pipe(sourcemaps.init())
        .pipe(sass(options.sass))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.css));
});

gulp.task('build-js', function() {
    var tsResult = gulp.src(input.typescript)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(output.js));
});
gulp.task('copy-html', function() {
  return gulp.src(input.html)
    .pipe(gulp.dest(output.html));
});

gulp.task('watch', function() {
  gulp.watch(input.typescript, ['build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.html, ['copy-html']);
});
