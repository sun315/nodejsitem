var express = require('express');
var router = express.Router();

//把model对象引进来
var UserModel = require("../model/user");
var GoodsModel = require("../model/goods_list");
var ImgModel = require("../model/img");
//引入multiparty(上传图片)
var multiparty = require("multiparty");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	res.render('login', {});
});

router.post('/api/login4ajax', function(req, res, next) {
	var username = req.body.username;
	var pwd = req.body.pwd;
	var idcode = req.body.idcode;//用户输入的验证码
	var code = req.body.code;//系统随机生成的验证码
	var result = {
		statuscode:1,
		message:"登录成功"
	};
	UserModel.find({username:username,pwd:pwd},(err,docs)=>{
		if(docs.length == 0){
			result.statuscode = -101;
			result.message = "您的账号或密码错误,请重新登录";
		}else{
			//登录成功的时候，生成session
			req.session.username = username;
			//console.log(req.session);
		}
		res.json(result);
	})
});

router.get('/dashboard', function(req, res, next) {
	//判断用户是否登录，如果没登录跳转到login页面
	//console.log(req.session);
	if(req.session == null || req.session.username == null){
		//res.render('login',{title:'登录页面'});
		res.redirect("/login");//重定向
		return;
	}
	res.render('dashboard', {});
});

//商品列表页
router.get('/goods_list', function(req, res, next) {
	GoodsModel.find(function(err,docs){
		console.log(docs);
		res.render('goods_list', {docs:docs});
	})
	
});

router.get('/add_goods', function(req, res, next) {
	res.render('add_goods', {});
});

//上传图片商品信息
router.post('/api/goods_upload',function(req,res,next){
	var form = new multiparty.Form({
		uploadDir:"public/img"//自动把文件存在这个路径下
	});
	var result = {
		code:1,
		message:"商品信息上传成功"
	};
	form.parse(req,function(err,body,files){
		var id = body.id[0];
		var goodsname = body.goodsname[0];//multiparty会转成数组，只要第一个元素就可以了，所以加[0]
		var goodsnum = body.goodsnum[0];
		var price = body.price[0];
		var inventory = body.inventory[0];
		var imgPath = files["img"][0].path.replace("public\\","");//文件路径,把public替换掉，只留images后面的路径
		var gm = new GoodsModel();
		gm.id = id;
		gm.goodsname = goodsname;
		gm.goodsnum = goodsnum;
		gm.price = price;
		gm.inventory = inventory;
		gm.imgPath = imgPath;
		gm.save(function(err){
			if(err){
				result.code = -99;
				result.message = "商品保存失败";
			}
			res.json(result);
		})

	})
})


module.exports = router;
