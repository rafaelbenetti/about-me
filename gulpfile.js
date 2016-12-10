var gulp = require('gulp');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var del = require('del');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

gulp.task('delete', function() {
    del(['assets/*'], function(err) {
      console.log('Files deleted');
    })
})

gulp.task('style', function() {
    return gulp
        .src('css/*.css')
        .pipe(concat('style.css'))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/assets'));
});

gulp.task('script', function(){
    return gulp
        .src('js/*.js')
        .pipe(concat('script.js'))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(jshint())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/dist'));
});

gulp.task('watch', function(){
    gulp.watch('css/style.css', ['style']);
    gulp.watch('js/*.js', ['script']);
});

gulp.task('default', ['delete', 'style', 'script', 'watch']);