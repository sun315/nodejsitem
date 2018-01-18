//选项卡切换
$(function(){
	var $uli = $(".choice ul li");
	var $oli = $(".choice ol li");
	$oli.addClass("hide");
	$oli[0].className = "show";
	$uli.addClass("normal");
	$uli[0].className = "hover";

	$uli.click(function(){
		var index = $(this).index();
		$uli.removeClass().addClass("normal");
		$(this).removeClass().addClass("hover");
		$oli.removeClass().addClass("hide");
		$oli.eq(index).removeClass().addClass("show");
	});
})

//上传图片
function upload(){
		var form = new FormData();//FormData是H5新特性
		form.append("id",document.getElementById("id").value);
		form.append("goodsname",document.getElementById("goods_name").value);
		form.append("goodsnum",document.getElementById("goods_num").value);
		form.append('price',document.getElementById("price").value);
		form.append('inventory',document.getElementById("inventory").value);
		form.append('img',document.getElementById("img").files[0]);

		var xhr = new XMLHttpRequest();
		xhr.open("POST","/api/goods_upload");
		xhr.onreadystatechange = function(res){
			if(xhr.readyState == 4 && xhr.status == 200){
				console.log(xhr.responseText);
				var res = JSON.parse(xhr.responseText);
				alert(res.message);
			}
		}
		xhr.send(form);
	}
