'use strict';

var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    sourcemaps = require('gulp-sourcemaps'),
    slim = require("gulp-slim"),
    del = require("del"),

    input  = {
      'misc': ['src/**/*.html', 'src/**/*.js', 'src/assets/**/*'],
      'slim': 'src/**/*.slim',
      'sass': 'src/**/*.scss',
      'typescript': 'src/**/*.ts',
      'semantic': 'semantic/dist/**/*'
    },

    output = {
      'base': 'dist',
      'html': 'dist',
      'css': 'css/style.css',
      'js': 'dist',
      'semantic': 'dist/semantic'
    },

    options = {
      sass: {
        outputStyle: (gutil.env.type === 'production')? 'compressed' : 'uncompressed'
      },
      slim: {
        pretty: false
      }
    }

gulp.task('default', ['clean', 'build-js', 'build-css', 'build-html', 'copy-semantic']);

gulp.task('build-css', function() {
    return gulp.src(input.sass)
        .pipe(sass(options.sass))
        .pipe(sourcemaps.init())
        .pipe(concatCss(output.css))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.base));
});

gulp.task('build-js', function() {
    var tsResult = gulp.src(input.typescript)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(output.js));
});
gulp.task('copy-misc', function() {
  return gulp.src(input.misc)
    .pipe(gulp.dest(output.base));
});
gulp.task('build-html', ['copy-misc'], function() {
  return gulp.src(input.slim)
    .pipe(slim(options.slim))
    .pipe(gulp.dest(output.html))
})
gulp.task('copy-semantic', function() {
  return gulp.src(input.semantic)
    .pipe(gulp.dest(output.semantic))
})

gulp.task('watch', ['default'], function() {
  gulp.watch(input.typescript, ['build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.misc, ['copy-misc']);
  gulp.watch(input.slim, ['build-html']);
});
gulp.task('clean', function() {
  return del([output.html + "/**/"])
})
