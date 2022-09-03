import gulp from 'gulp';
import paths from "./paths.js";
import svgSprite from 'gulp-svg-sprite';
import svgMin from "gulp-svgmin";
import { deleteSync } from "del";
import browserSync from 'browser-sync';
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpSass from "gulp-sass";
import sassCompiler from "sass"
import cleanCss from "gulp-clean-css"
import autoPrefixer from 'gulp-autoprefixer';
import gulpMedia from "gulp-group-css-media-queries"
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import posthtml from 'gulp-posthtml';
import include from "posthtml-include";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from "gulp-webp"

const sass = gulpSass(sassCompiler)

export default {
  svg,
  svgM,
  server,
  html,
  watcher,
  scss,
  del,
  images
}

function del(done) {
  deleteSync(paths.folder.build)
  done()
}

function watcher() {
  gulp.watch(paths.folder.srcHtml, html)
  gulp.watch(paths.folder.srcScss, scss)
  gulp.watch(paths.folder.srcImgs, images)
}

function server() {

  browserSync.init({
    server: {
      baseDir: paths.folder.build
      // notify: false,
      // port: 3000
    }
  });

}

// TODO IMAGES ///

function images(done) {
  gulp.src(paths.files.srcImgs)
    .pipe(plumber(
      notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(newer(paths.folder.buildImgs))
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest(paths.folder.buildImgs))
    .pipe(gulp.src(paths.files.srcImgs))
    .pipe(newer(paths.folder.buildImgs))
    .pipe(imagemin([
      mozjpeg({ quality: 75, progressive: true }),
      optipng({ optimizationLevel: 3 }),
    ])

    )
    .pipe(gulp.dest(paths.folder.buildImgs))
    .pipe(gulp.src(paths.files.srcSvg))
    .pipe(newer(paths.folder.buildImgs))
    .pipe(gulp.dest(paths.folder.buildImgs))

  done()
}



// TODO HTML ///


function html() {

  return gulp.src(paths.files.srcHtml)
    .pipe(plumber(
      notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(posthtml([
      include()
    ]))
    .pipe(replace(/@img\//g, 'img/'))
    .pipe(gulp.dest(paths.folder.build))
    .pipe(browserSync.stream())
}

// TODO SCSS ///

function scss() {
  return gulp.src(paths.files.srcScss)
    .pipe(plumber(
      notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sass())
    .pipe(gulpMedia())
    .pipe(autoPrefixer(
      {
        grid: true,
        overrideBrowserlist: ["last 3 versions"],
        cascade: true,
      }
    ))
    .pipe(gulp.dest(paths.folder.buildCss))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.folder.buildCss))
    .pipe(browserSync.stream())
}




// ! svg sprites

function svg() {
  return gulp
    .src('img/icons/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          example: true,
          sprite: 'sprite',
          dest: "."
        },

      }
    }))
    .pipe(gulp.dest(rootFolder));
}



function svgM() {
  return gulp.src(paths.folder.buildImgs + "/icons/logo.svg")
    .pipe(svgMin({
      full: true,
      plugins: [
        "removeEmptyText",
        'cleanupAttrs',
        "removeStyleElement",
        // {
        //   name: "removeAttrs",
        //   params: {
        //     attrs: ["path:class", "path:fill"],
        // attrs: "path:fill"
        //   }
        // }
      ]
    }))
    .pipe(gulp.dest(paths.folder.src))
}
