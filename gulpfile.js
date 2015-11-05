var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: "."
  });
  gulp.watch("sass/**/*.scss", ['styles']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
