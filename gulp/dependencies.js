/**
 * Dependency management
 *
 * @package gthotel/assets
 * @version 0.0.1
 * @author  Pixelhub
 */

var gulp    = require('gulp'),
    paths   = gulp.paths;


gulp.task('copy-deps', function() {

    // Fontawesome font files
    var stream = gulp.src(paths.bower + 'font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}').pipe(gulp.dest(paths.assets + 'fonts/font-awesome'));

    // jQuery slim.
    gulp.src(paths.bower + 'jquery/dist/jquery.slim.min.js')
        .pipe(gulp.dest(paths.assets + 'js/vendor'));

    // Bootstrap js.
    gulp.src(paths.node + 'bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(paths.assets + 'js/vendor'));
    
    // Pace js file.
    gulp.src(paths.bower + 'PACE/pace.min.js')
        .pipe(gulp.dest(paths.assets + 'js/vendor'));

    // matchHeight.
    gulp.src(paths.bower + 'matchHeight/jquery.matchHeight.js')
        .pipe(gulp.dest(paths.assets + 'js/vendor'));

    // Understrap customizer js.
    gulp.src(paths.node + 'understrap/js/customizer.js')
        .pipe(gulp.dest(paths.assets + 'js'));
    
    return stream;

});