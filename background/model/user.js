var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var User = new Schema({
	username   : String,
	pwd        : String,
	create_date:{type:Date,default:Date.now}
});
//创建model对象(引号内是文档名)
var UserModel = mongoose.model('user',User);
//公开对象，暴露接口
module.exports = UserModel;//UserModel本身就是个对象，所以可以直接赋值