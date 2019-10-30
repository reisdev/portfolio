const gulp = require("gulp");
const babel = require("gulp-babel");
const useref = require("gulp-useref");
const uglify = require("gulp-uglify");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const del = require("del");

gulp.task("js", function() {
  return (
    gulp
      .src("src/static/js/*.js")
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      // Minifies only if it's a JavaScript file
      .pipe(uglify())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("dist/js"))
  ); // Outputs the file in the destination folder
});

gulp.task("css", function() {
  return gulp
    .src("src/static/css/*style.css")
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(del(["style.min.css"]))
    .pipe(gulp.dest("dist/css")); // Outputs the file in the destination folder
});

gulp.task(
  "build",
  gulp.series(["js", "css"], function() {
    return gulp
      .src("src/index.html")
      .pipe(useref())
      .pipe(gulp.dest("dist")); // Outputs the file in the destination folder
  })
);
