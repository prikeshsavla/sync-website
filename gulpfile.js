var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("assets/css/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/css/**/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));