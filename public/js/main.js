

$("#compute").click(function () {
	
	var post_url = $("#url").val();
	console.log(post_url);
	$.post('./url', {
		url: post_url
		
	}, function (data, status) {
		
		$("#result").text(data.properties.price.max);
			}, 3000);
			
		});
		//$("#result").fadeOut();
		
		//$("#result").fadeIn();	


