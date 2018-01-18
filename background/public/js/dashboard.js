//左侧导航栏的开关
$(".tabmain ul li").click(function(){
	$(this).find("ol").toggle();
})

//左侧导航栏的加减号变化
function onOff(){
	var tog = true;
	$(".tabmain ul li").on("click",function(event){
		//console.log(parseInt($(this).css("height"))>50)
		if(parseInt($(this).css("height")) > 50){
			$(this).find("span").text("-");
			tog = false;
			event.stopPropagation();
		}else{
			$(this).find("span").text("+");
			tog = true;
			event.stopPropagation();
		}
	})
}
onOff();

//点击商品列表跳转
