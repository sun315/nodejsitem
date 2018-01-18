var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Goods = new Schema({
	id          : Number,
	goodsname   : String,
	goodsnum    : String,
	price       : Number,
	inventory   : Number,
	create_date :{type:Date,default:Date.now}
});
//创建model对象(引号内是文档名)
var GoodsModel = mongoose.model('goods',Goods);
//公开对象，暴露接口
module.exports = GoodsModel;//UserModel本身就是个对象，所以可以直接赋值