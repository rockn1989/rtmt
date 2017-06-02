
var gulp = require("gulp"),
		less = require("gulp-less"),
		autoprefixer = require("gulp-autoprefixer"),
		rename    = require("gulp-rename"),
		htmlreplace= require("gulp-html-replace"),
		minify = require("gulp-csso"),
		imagemin  = require("gulp-imagemin"),
		copy  = require("gulp-copy"),
		del   = require("del"),
		run = require("run-sequence"),
		browserSync = require("browser-sync"),
		svgstore  = require("gulp-svgstore"),
		svgmin    = require("gulp-svgmin"),
		svgSprite = require('gulp-svg-sprite'),
		cheerio   = require("gulp-cheerio"),
		clean     = require("gulp-clean");

gulp.task("clean", function() {
	return gulp.src('app/img/icon-svg/sprite-svg.svg')
					.pipe(clean({force: false}));
});

gulp.task("less", function() {
	return gulp.src("app/less/main.less")
				.pipe(less())
				.pipe(autoprefixer(["last 15 version", "> 1%", 'firefox 14', "ie 8", "ie 7"], {cascade: true}))
				.pipe(rename("style.css"))
				.pipe(gulp.dest("app/css"))
				.pipe(browserSync.reload({stream: true}))
});

gulp.task("less:build", function() {
	return gulp.src("app/less/main.less")
				.pipe(less())
				.pipe(autoprefixer(["last 15 version", "> 1%", 'firefox 14', "ie 8", "ie 7"], {cascade: true}))
				.pipe(gulp.dest("app/css"))
				.pipe(rename("style.css"))
				.pipe(gulp.dest("build/app/css"));
});

gulp.task("svgstoreDev",["clean"], function() {
	return gulp.src("app/img/icon-svg/*.svg")
				.pipe(svgstore({
					inlineSvg: true
				}))
				.pipe(rename("sprite-svg.svg"))
				.pipe(gulp.dest("app/img/icon-svg/"))
});

gulp.task("serve", ["less", "svgstore"], function() {
	browserSync.init({
		server: "./app",
		notify: false
	});

	gulp.watch("app/less/**/*.less", ["less"]);
	gulp.watch("app/img/icon-svg/*.svg", ["svgstoreDev"]);
	gulp.watch("app/img/icon-svg/*.svg", browserSync.reload);
	gulp.watch("app/js/**/*.js", browserSync.reload);
	gulp.watch("app/*.html", browserSync.reload);

});

gulp.task("images", function() {
	return gulp.src("build/app/img/**/*.{png,jpg,gif}")
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true})
	]))
	.pipe(gulp.dest("build/app/img"));
});

gulp.task("replace", function() {
	gulp.src("app/*.html")
	.pipe(htmlreplace({
		"css": "css/min.style.css",
		"js": "js/min.libs.js"
	}))
	.pipe(gulp.dest("build/app/"));
});

gulp.task("copy", function() {
	return gulp.src([
		"app/fonts/**/*.{woff,woff2}",
		"app/img/**",
		"app/js/**",
		"app/libs/**",
		"app/*.html"
	], {
		base: "."
	})
	.pipe(gulp.dest("build"));
});

gulp.task("del", function() {
	return del("build");
});

gulp.task("del", function() {
	return del("build");
});

gulp.task("svgmin", function() {
	return gulp.src("app/img/icon-svg/*.svg")
				.pipe(svgmin())
				.pipe(gulp.dest("build/app/img/icon-svg"))
});

gulp.task("removeSvgFill", function() {
	return gulp.src("app/img/svg/*.svg")
					.pipe(cheerio({
						run: function($) {
							$("[fill]").removeAttr("fill");
						},
						parseOptions: {xmlMode: true}
					}))
					.pipe(gulp.dest("app/img/svg/"))
});

gulp.task("svgstore", function() {
	return gulp.src("app/img/icon-svg/*.svg")
				.pipe(svgstore({
					inlineSvg: true
				}))
				.pipe(rename("sprite-svg.svg"))
				.pipe(gulp.dest("app/img/icon-svg/"))
});

gulp.task("svgstore:build",["svgmin"], function() {
	return gulp.src("build/app/img/icon-svg/*.svg")
				.pipe(svgstore({
					inlineSvg: true
				}))
				.pipe(rename("sprite-svg.svg"))
				.pipe(gulp.dest("build/app/img/icon-svg"))
});

gulp.task("production", ["less:build","svgstore:build", "images", "copy"]);

gulp.task("build", function() {
	run(
		"del",
		"production",
		"replace"
	)
});
