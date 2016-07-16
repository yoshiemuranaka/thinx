var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');

var paths = {
  scripts: './js/**/*',
  scss: './scss/*.scss'
};

/*
Task for compiling Sass files
*/
gulp.task('build:css', function () {
  return sass( paths.scss, {
  	sourcemap: false, 
  	noCache: true,
  	style: 'compressed'
  })
  .on('error', sass.logError)
  .pipe(gulp.dest('styles.css'))
});

/*
Task to minify JavaScript files
*/
gulp.task('build:js', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});


gulp.task('watch', function() {
  gulp.watch(paths.scss, ['build:css']);
  gulp.watch(paths.scripts, ['build:js']);
});

gulp.task('default', ['build:css', 'build:js', 'watch']);

