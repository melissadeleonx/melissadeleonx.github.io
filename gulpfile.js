const gulp = require('gulp');
const csso = require('gulp-csso');
const terser = require('gulp-terser');  // Replace gulp-uglify with gulp-terser
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const cp = require('child_process');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');

// const del = require('del'); // Comment out or remove this line

const jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

// Compile and minify js
gulp.task('js', function() {
    return gulp.src(['src/js/**/*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(terser())  // Use gulp-terser instead of gulp-uglify
        .pipe(gulp.dest('assets/js/'));
});

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll & reload browserSync
gulp.task('jekyll-rebuild', gulp.series(['jekyll-build'], function (done) {
    browserSync.reload();
    done();
}));

// Build the Jekyll site and launch browser-sync
gulp.task('browser-sync', gulp.series(['jekyll-build'], function(done) {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
    done();
}));

// Compile and minify sass
gulp.task('sass', function() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

// Compile fonts
gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*.{ttf,woff,woff2}')
        .pipe(plumber())
        .pipe(gulp.dest('assets/fonts/'))
});

// Minify images
gulp.task('imagemin', function() {
    return gulp.src('src/img/**/*.{jpg,png,gif}')
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('assets/img/'))
});

// Watch files
gulp.task('watch', function() {
    gulp.watch('src/styles/**/*.scss', gulp.series(['sass', 'jekyll-rebuild']));
    gulp.watch('src/js/**/*.js', gulp.series(['js', 'jekyll-rebuild']));
    gulp.watch('src/fonts/**/*.{ttf,woff,woff2}', gulp.series(['fonts']));
    gulp.watch('src/img/**/*.{jpg,png,gif}', gulp.series(['imagemin']));
    gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html'], gulp.series(['jekyll-rebuild']));
});

// Default task
gulp.task('default', gulp.series(['js', 'sass', 'fonts', 'browser-sync', 'watch']));
