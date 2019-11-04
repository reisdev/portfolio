const gulp = require("gulp");
const babel = require("gulp-babel");
const useref = require("gulp-useref");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const image = require("gulp-image");
const replace = require("gulp-replace-image-src");
const clean = require("gulp-clean");
const htmlmin = require("gulp-htmlmin");
const connect = require("gulp-connect");

gulp.task("html", function() {
  return gulp
    .src("src/index.html")
    .pipe(
      replace({
        prependSrc: "img/",
        keepOrigin: false
      })
    )
    .pipe(useref())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("tmp"));
});

gulp.task("image", function() {
  return gulp
    .src("src/static/img/*.{png,jpg,svg}")
    .pipe(image())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("js", function() {
  return gulp
    .src("tmp/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("css", function() {
  return gulp
    .src("tmp/css/*.css")
    .pipe(postcss())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("font", function() {
  return gulp
    .src("src/static/webfonts/*.{woff,woff2,eot,ttf,svg}")
    .pipe(gulp.dest("dist/webfonts"));
});

gulp.task("manifest", function() {
  return gulp.src("manifest.json").pipe(gulp.dest("dist"));
});

gulp.task(
  "transfer",
  gulp.series(["html", "image", "js", "css", "font", "manifest"])
);

gulp.task("cleanup", function() {
  return gulp.src("tmp", { read: false }).pipe(clean());
});

gulp.task("build", gulp.series(["transfer", "cleanup"]));

gulp.task("serve", function() {
  connect.server({
    root: "src",
    livereload: true
  });
});
