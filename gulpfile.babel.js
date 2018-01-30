import webpack from "webpack";
import rimraf from "rimraf";

import gulp from "gulp";
import loadPlugins from "gulp-load-plugins";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import minify from "gulp-minify-css";
import rename from "gulp-rename";

const plugins = loadPlugins();

import popupWebpackConfig from "./popup/webpack.config";

gulp.task("popup-js", ["clean"], cb => {
  webpack(popupWebpackConfig, (err, stats) => {
    if (err) throw new plugins.util.PluginError("webpack", err);

    plugins.util.log("[webpack]", stats.toString());

    cb();
  });
});

gulp.task("popup-html", ["clean"], () => {
  return gulp
    .src("popup/src/index.html")
    .pipe(plugins.rename("popup.html"))
    .pipe(gulp.dest("./build"));
});

gulp.task("build-css", function() {
  console.log("buidling css..");
  gulp
    .src("./styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 25 versions"]
      })
    )
    .pipe(minify())
    .pipe(
      rename({
        basename: "main",
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./build"));
});

gulp.task("copy-manifest", ["clean"], () => {
  return gulp.src("manifest.json").pipe(gulp.dest("./build"));
});

gulp.task("clean", cb => {
  rimraf("./build", cb);
});

gulp.task("build", ["copy-manifest", "popup-js", "popup-html", "build-css"]);

gulp.task("watch", ["default"], () => {
  gulp.watch("popup/**/*", ["build"]);
  gulp.watch("styles/**/*", ["build"]);
});

gulp.task("default", ["build"]);
