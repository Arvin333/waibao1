(function () {
	// body...
	var j_Card = $(".j_Card");
	j_Card.click(function (e) {
		$.ajax({
			url:"./",
			method:"POST",
			data:"data",
			complete:function (argument) {
				// body...
			},
			success:function(e) {
					
			},
			error:function (e) {
				console.log(e)
			}
		})
	})
}())