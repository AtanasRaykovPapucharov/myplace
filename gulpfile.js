const gulp = require('gulp');

const sass = require('gulp-sass');
gulp.task('sass:compile', () => {
    return gulp.src(['./app/ui/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/ui/css'));
});

const concatCss = require('gulp-concat-css');
gulp.task('css:concat', () => {
    return gulp.src('./app/ui/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./app/ui/css/bundle-css'));
});

const uglifyCss = require('gulp-uglifycss');
gulp.task('css:compress', () => {
    gulp.src('./app/ui/css/bundle-css/bundle.css')
        .pipe(uglifyCss({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(gulp.dest('./app/ui'))
});

gulp.task('sass:watch', () => {
    gulp.watch('./app/ui/**/*.scss', ['sass:compile', 'css:concat', 'css:compress']);
});