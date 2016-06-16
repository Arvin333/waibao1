
(function () {
	$(".class-nub").click(function(e){
		$(this).next().toggle();
		console.log($(this).children(0).attr("count"))
		if($(this).children(0).attr("count")==1){
			$(this).children(0).css({"transform":"rotate("+90+"deg)"}).attr("count","0")
		}
		else{
			$(this).children(0).css({"transform":"rotate("+0+"deg)"}).attr("count","1")
		}
	})
	$(".edit").click(function (e) {
		console.log($(this).siblings().children(0))
		$(this).siblings().children(0).removeAttr("disabled").css({"background-color":"#fff"}).focus()
	})
	$(".delete").click(function (e) {
		console.log($(this).siblings().children(0))
		$(this).parent().html("")
	})
})()