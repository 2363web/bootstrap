var gulp = require('gulp');
var bootlint  = require('gulp-bootlint');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('scss/bootstrap.scss')
    .pipe(rename('bootstrap.min.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('.'));
});

gulp.task('lint', function() {
    return gulp.src('./*/*.html')
        .pipe(bootlint());
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss',['sass']);
});
