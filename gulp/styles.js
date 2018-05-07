/**
 * Tasks for style assets
 *
 * @author  Pixelhub
 * @version 0.0.1
 */

var gulp        = require('gulp'),
    paths       = gulp.paths,
    plumber     = require('gulp-plumber'),
    sourcemaps  = require('gulp-sourcemaps'),
    sassGlob    = require('gulp-sass-glob'),
    sass        = require('gulp-sass'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename');

gulp.task('cssnano', function(){
    return gulp.src(paths.assets + 'css/theme.css')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(plumber())
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano({discardComments: {removeAll: true}}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.assets + 'css'));
});

// Compiles Public SCSS files in CSS.
gulp.task('sass', function() {

    var stream = gulp.src(paths.dev + 'sass/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.assets + 'css'))
        .pipe(rename('custom-editor-style.css'));

    return stream;

});