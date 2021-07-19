let gulp = require('gulp');
let bs = require('browser-sync').create();// livereload
let plumber = require('gulp-plumber');
let less = require('gulp-less');
let postcss= require( 'gulp-postcss' ) // post css
let mqpacker= require( 'css-mqpacker' )
let rename = require('gulp-rename');
let csso = require('gulp-csso');

gulp.task('less',function () {
    return gulp.src('src/**/main.less')
    // .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    // .pipe(less()).on('error', less.logError)
    // .pipe(sourcemaps.write({includeContente: false, sourceRoot: '.'}))// delete ?
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
    .pipe(csso())
    .pipe(rename('style.min.css'))
    // .pipe(sourcemaps.write('.')) // delete ',' ? ok ?
    .pipe(gulp.dest('build/css'))
    .pipe(bs.reload({
      stream: true
    }))
  })

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask


gulp.task('html', function (){
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('build/'))
      .pipe(bs.reload({
      stream: true
    }))
 })





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

  })
