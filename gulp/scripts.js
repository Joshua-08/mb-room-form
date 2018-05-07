/**
 * Tasks for script assets
 *
 * @package     gthotel/assets
 * @version     0.0.1
 * @author      Pixelhub
 * 
 */

var gulp    = require('gulp'),
    paths   = gulp.paths,
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify');

// Uglifies and concat all custom JS dev files into one.
gulp.task('scripts', function() {

    var scripts = [

        paths.bower + 'jquery/dist/jquery.js',

        // Popper
        paths.bower + 'popper.js/dist/umd/popper.js',

        // Bootstrap 4
        // paths.node + 'bootstrap/dist/js/bootstrap.js',
        
        // Vue Js
        paths.bower + 'vue/dist/vue.js',
        
        // Vue Resouce
        paths.bower + 'vue-resource/dist/vue-resource.js',

        // Core JS Files.
        paths.dev + 'js/**/*.js'

        
    ];

    /**
     * Concatenates all the scripts that are included
     * in the 'scripts' variable into one file ('theme.js')
     *
     * Destination: paths.assets + 'js/'
     */
    gulp.src(scripts)
        .pipe(concat('theme.js'))
        .pipe(gulp.dest(paths.assets + 'js/'));

    // Uncomment this out if you already want to uglify the kidsworld-booking-public.js
    /**
     * Concatenates and minify all the scripts that are included
     * in the 'scripts' variable into one file ('theme.js').
     *
     * Destination: paths.assets + 'js/'
     */
    // gulp.src(paths.assets + 'js/theme.js')
    //     .pipe(concat('theme.min.js'))
    //     .pipe(uglify())
    //     .pipe(gulp.dest(paths.assets + 'js/'));

});