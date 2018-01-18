//引入所需要的插件
var gulp = require("gulp");
var sass = require("gulp-sass");
//创建任务（发布任务），task有两个参数，第一个是任务名，第二个是回调函数
gulp.task("mission",function(){
	//*通配符，代表这个文件夹下所有的scss文件
	return gulp.src("public/sass/*.scss").pipe(sass({style : "expended"})).pipe(gulp.dest("public/css"));
})
//发布一个监听任务
gulp.task("watch",function(){
	gulp.watch("public/sass/*.scss",["mission"]);
})