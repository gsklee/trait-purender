import Gulp from 'gulp';
import $ from 'gulp-load-plugins';

$ = $();

Gulp.task('build:scripts',
  () => Gulp.src('trait-purender.babel.js')
            .pipe($.rename('trait-purender.js'))
            .pipe($.babel({
              loose: 'all',
              experimental: true
            }))
            .pipe(Gulp.dest('.'))
);
