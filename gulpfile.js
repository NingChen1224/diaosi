
//by 宁尘
var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	less = require("gulp-less"),
	watch = require("gulp-watch"),
	browserify = require("gulp-browserify"),
	copy = require("gulp-file-copy");

//对js文件进行编译和压缩

gulp.task("uglify",function(){
	gulp.src('./src/js/*.js')
	.pipe(browserify()) //首先对其进行模块编译
	.pipe(uglify()) //对文件进行压缩
	.pipe(gulp.dest('./build/js')); //输出到目的文件夹
});

gulp.task("less",function(){
	gulp.src("./src/css/*.less")
	.pipe(less())
	.pipe(gulp.dest("./build/css"));
});

gulp.task("copy",function(){
	gulp.src('./src/html')
	.pipe(copy('./build/html'),{start:'./src/html'});
	
});
//监听文件变化 并实时对其重新编译
gulp.task("watch",function(){

	gulp.watch(['./src/js/*.js','./src/css/*.less','./src/html/*.html'],
		['uglify','less','copy']);
});

gulp.task("default",["uglify",'less','copy']);