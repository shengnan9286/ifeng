var gulp=require("gulp"),
	webserver=require("gulp-webserver"),
	livereload=require("gulp-livereload"),
	uglify=require("gulp-uglify")
	imagemin=require("gulp-imagemin"),
	pngquant=require("imagemin-pngquant");


// 注册任务：
gulp.task("webserver",function(){
	gulp.src('./dist').pipe(webserver({
		livereload:true,
		open:true
	}))
});
// html任务：
gulp.task("html",function(){
	return gulp.src("src/**/*.html")
	.pipe(gulp.dest("dist"));
	//指明源文件路径并输出到发布环境
});

// sass任务：
gulp.task("css",function(){
	return gulp.src("src/**/**.css")
	.pipe(gulp.dest("dist"));
})

// script压缩任务：
gulp.task("script",function(){
	return gulp.src("src/**/*.js")
		// .pipe(uglify({preserveComment:"some"})) //压缩并保留注释
		.pipe(gulp.dest("dist"))
})
//压缩图片
/*gulp.task("image",function(){
	return gulp.src("src/images/*.{png,jpg,gif,svg}")
		.pipe(imagemin({progressive:true,
						use:[pngquant()]
		})) //无损压缩
		.pipe(gulp.dest("dist/images"))
})*/

// 监听任务：
gulp.task("watch",function(){
	gulp.watch("*.html",["html"]);//监听根目录下所有的html
});

//默认执行任务：
gulp.task("default",['css',"webserver","html","script","watch"]);