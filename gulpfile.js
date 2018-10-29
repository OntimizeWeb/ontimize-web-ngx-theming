const gulp = require('gulp');
const copyfiles = require('copyfiles');
const cssimport = require("gulp-cssimport");
const replace = require('gulp-replace');

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

gulp.task('copy.themes.files', (callback) => {
  copyfiles(['src/themes/*.scss', 'tmp/src'], 1, callback);
});

gulp.task('delete.angular.imports', () => {
  return gulp.src([THEMES_STYLES_CONF.STYLES_SRC])
    .pipe(replace(THEMES_STYLES_CONF.MATERIAL_IMPORT, ''))
    .pipe(gulp.dest(THEMES_STYLES_CONF.STYLES_TMP));
});

gulp.task('copy.styles.files', (callback) => {
  copyfiles(['src/styles/**/*.scss', 'dist/src'], 1, callback);
});

gulp.task('concat.themes', (callback) => {
  return gulp.src(THEMES_STYLES_CONF.TMP_SRC)
    .pipe(cssimport(THEMES_STYLES_CONF.OPTIONS))
    .pipe(gulp.dest(THEMES_STYLES_CONF.DIST));
});

gulp.task('concat.themes.scss', gulp.series('copy.themes.files', 'delete.angular.imports', 'copy.styles.files', 'concat.themes'));

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

gulp.task('copy-files-internal', (callback) => {
  copyfiles(FILES, true, callback);
});

gulp.task('copy-files', gulp.series('copy-files-internal', 'concat.themes.scss'));