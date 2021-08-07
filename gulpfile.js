const gulp = require('gulp');
const bs = require('browser-sync').create();
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer')
const postcss= require( 'gulp-postcss' )
const mqpacker= require( 'css-mqpacker' )
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const rm = require( 'gulp-rm' )
const sourcemaps = require('gulp-sourcemaps');

gulp.task('less',function () {
    return gulp.src('src/**/main.less')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    // .pipe(less()).on('error', less.logError)
    .pipe(sourcemaps.write({includeContente: false, sourceRoot: '.'}))// delete ?
    // .pipe(sourcemaps.init({loadMaps: true})) // delete ?
    .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
    // .pipe(uncss({
    //   html: ['./build/index.html']
    // }))
    // .pipe(autoprefixer({
    //   browsers: ['last 10 versions', "IE 11", "IE 10"],
    //   cascade: true
    // }))
    // .on("error", notify.onError({
    //   title: "Error in scss"
    // }))
    // .pipe(stripCssComments())
    // .pipe(csso())
    .pipe(rename('style.min.css'))
    // .pipe(sourcemaps.write('.')) // delete ',' ? ok ?
    .pipe(gulp.dest('build/css'))
    .pipe(bs.reload({
      stream: true
    }))
  })

 gulp.task('less-final',function () {
    return gulp.src('src/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    // .pipe(sourcemaps.write({includeContente: false, sourceRoot: '.'}))// delete ?
    // .pipe(sourcemaps.init({loadMaps: true})) // delete ?
    .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
    // .pipe(uncss({
    //   html: ['./build/index.html']
    // }))
    .pipe(autoprefixer({
      cascade: true
    }))
    // .on("error", notify.onError({
    //   title: "Error in scss"
    // }))
    // .pipe(stripCssComments())
    .pipe(csso())
    .pipe(rename('style.min.css'))
    // .pipe(sourcemaps.write('.')) // delete ',' ? ok ?
    .pipe(gulp.dest('build/css'))
    .pipe(bs.reload({
      stream: true
    }))
  })


gulp.task("copy-img", function (){
  return gulp.src(["src/img/**/*.*"])
  .pipe(gulp.dest("build/img"))
  .pipe(bs.reload({
    stream: true
  }))
})



gulp.task('script', function() {
    return gulp.src('src/**/main.js')
    .pipe(plumber())
    // .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(bs.reload({
      stream: true
    }))
  })

gulp.task('html', function (){
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('build/'))
      .pipe(bs.reload({
      stream: true
    }))
 })


gulp.task('clear', function() {
  return gulp.src( 'build/**/*', { read: false })
  .pipe(rm({
   async: true
  }) )
 })

gulp.task('build',
  gulp.series(
      'clear',
      'copy-img',
      // 'copy-css',
      // 'copy-css-54',
      // 'html2pug',
      // 'pug',
      // 'html',
      // 'img',
      // 'svg',
      'html',
      'less',
      'script',
      // 'scripts:lib',
      // 'script'
      // $.gulp.parallel('html','img', 'scss'),
      // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
    ));



  gulp.task('serve', function (){
    bs.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: true,
      ui: false
    }),
    gulp.watch("src/less/**/*.less",  gulp.parallel('less'));
    gulp.watch("src/**/*.html",  gulp.parallel('html'));
        gulp.watch("src/**/*.js",  gulp.parallel('script'));
    gulp.watch("src/**/*.html",  gulp.parallel('html'));

  })
