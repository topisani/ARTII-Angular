'use strict';

var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    slim = require("gulp-slim"),
    del = require("del"),

    input  = {
      'html': 'src/**/*.html',
      'slim': 'src/**/*.slim',
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
      },
      slim: {
        pretty: false
      }
    }

gulp.task('default', ['clean', 'build-js', 'build-css', 'build-html']);

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
gulp.task('build-html', ['copy-html'], function() {
  return gulp.src(input.slim)
    .pipe(slim(options.slim))
    .pipe(gulp.dest(output.html))
})

gulp.task('watch', ['default'], function() {
  gulp.watch(input.typescript, ['build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.html, ['copy-html']);
  gulp.watch(input.slim, ['build-html']);
});
gulp.task('clean', function() {
  return del([output.html + "/**/"])
})
