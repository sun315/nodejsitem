var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Img = new Schema({
	id          : Number,
	goodsname   : String,
	goodsnum    : String,
	price       : Number,
	inventory   : Number,
	img         : String,
	create_date :{type:Date,default:Date.now}
});
//创建model对象(引号内是文档名)
var ImgModel = mongoose.model('newgoods',Img);
//公开对象，暴露接口
module.exports = ImgModel;//UserModel本身就是个对象，所以可以直接赋值