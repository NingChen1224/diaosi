
//by 宁尘
var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	less = require("gulp-less"),
	watch = require("gulp-watch"),
	browserify = require("gulp-browserify"),
	copy = require("gulp-copy");

//对js文件进行编译和压缩

gulp.task("uglify",function(){
	gulp.src('./src/js/*.js')
	.pipe(browserify()) //首先对其进行模块编译
	.pipe(uglify()) //对文件进行压缩
	.pipe(gulp.dest('./build/js')); //输出到目的文件夹
});

gulp.task("default",["uglify"]);