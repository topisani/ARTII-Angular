'use strict';

var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    slim = require("gulp-slim"),
    del = require("del"),

    copy = {
      'src/materialize/js/bin/**/*': 'dist/js/',
      'src/materialize/font/**/*': 'dist/font/',
      'src/**/*.html': 'dist',
      'src/app/**/*.js': 'dist',
      'src/assets/**/*': 'dist/assets'
    },

    input  = {
      'copy': Object.keys(copy),
      'slim': 'src/**/*.slim',
      'sass': 'src/app/**/*.scss',
      'typescript': 'src/**/*.ts',
      'materialize': 'src/materialize/sass/materialize.scss',
      'watchMaterial': 'src/materialize/sass/**/*'
    },

    output = {
      'base': './dist',
      'html': './dist',
      'css': './dist/css/',
      'js': './dist',
      'tmp': './tmp'
    },

    options = {
      sass: {
        outputStyle: (gutil.env.type === 'production')? 'compressed' : 'uncompressed'
      },
      slim: {
        pretty: false
      }
    };

gulp.task('default', ['clean', 'build-js', 'build-css', 'build-html', 'materialize', 'clean-tmp']);

gulp.task('build-css', function() {
    gulp.src(input.sass)
        .pipe(concat("/style.scss"))
        .pipe(gulp.dest(output.tmp));
    return gulp.src(output.tmp + "/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(options.sass).on('error', sass.logError))
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
gulp.task('copy', function() {
  for (var key in copy) {
      gulp.src(key).pipe(gulp.dest(copy[key]));
  }
});
gulp.task('build-html', ['copy'], function() {
  return gulp.src(input.slim)
    .pipe(slim(options.slim))
    .pipe(gulp.dest(output.html))
})

gulp.task('watch', ['default'], function() {
  gulp.watch(input.typescript, ['build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.copy, ['copy']);
  gulp.watch(input.slim, ['build-html']);
  gulp.watch(input.watchMaterial, ['materialize'])
});
gulp.task('clean', ['clean-tmp'],function() {
  return del([output.base])
})
gulp.task('clean-tmp', function() {
  return del([output.tmp])
})

gulp.task('materialize', function() {
  return gulp.src(input.materialize)
    .pipe(sourcemaps.init())
    .pipe(sass(options.sass).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.css));
})
