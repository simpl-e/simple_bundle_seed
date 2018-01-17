
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js'
    ])
            .pipe(concat('bundle.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/font-awesome/css/font-awesome.css'
    ])
            .pipe(concat('bundle.css'))
            .pipe(cleanCSS())
            .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function () {
    return gulp.src([
        'node_modules/font-awesome/fonts/**'
    ])
            .pipe(gulp.dest('dist/fonts'));
});
