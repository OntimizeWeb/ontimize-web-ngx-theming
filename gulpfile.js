const gulp = require('gulp');
const sass = require('node-sass');
const inlineTemplates = require('gulp-inline-ng2-template');
const exec = require('child_process').exec;
const copyfiles = require('copyfiles');
const cssimport = require("gulp-cssimport");
const replace = require('gulp-replace');

const FILES = [
  'ontimize-theme.scss',
  'ontimize-theme-lite.scss',
  'CHANGELOG.md',
  'LICENSE',
  'README.md',
  'package.json',
  'ontimize.scss',
  '.npmignore',
  'dist'
];

gulp.task('copy-files', ['concat.themes.scss'], (callback) => {
  copyfiles(FILES, true, callback);
});

const THEMES_STYLES_CONF = {
  STYLES_SRC: './src/styles/**/*.scss',
  STYLES_TMP: './tmp/src/styles',
  TMP_SRC: './tmp/src/themes/*.scss',
  DIST: './dist/src/themes',
  OPTIONS: {
    matchPattern: "!node_modules/@angular/material/theming*"
  },
  MATERIAL_IMPORT: '@import \'node_modules/@angular/material/theming\';'
};

gulp.task('concat.themes.scss', ['copy.themes.files', 'delete.angular.imports', 'copy.styles.files'], (callback) => {
  return gulp.src(THEMES_STYLES_CONF.TMP_SRC)
    .pipe(cssimport(THEMES_STYLES_CONF.OPTIONS))
    .pipe(gulp.dest(THEMES_STYLES_CONF.DIST));
});

gulp.task('copy.themes.files', (callback) => {
  copyfiles(['src/themes/*.scss', 'tmp/src'], 1, callback);
});

gulp.task('copy.styles.files', (callback) => {
  copyfiles(['src/styles/**/*.scss', 'dist/src'], 1, callback);
});

gulp.task('delete.angular.imports', function () {
  gulp.src([THEMES_STYLES_CONF.STYLES_SRC])
    .pipe(replace(THEMES_STYLES_CONF.MATERIAL_IMPORT, ''))
    .pipe(gulp.dest(THEMES_STYLES_CONF.STYLES_TMP));
});
