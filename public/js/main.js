

$("#compute").click(function () {
	
	var post_url = $("#url").val();
	console.log(post_url);
	$.post('./url', {
		url: post_url
		
	}, function (data) {
		
		$("#pricem2").text(Math.round(data.finalres.properties.price_m2) + " €");
		$("#type").text(data.finalres.properties.type);
		$("#city").text(data.finalres.properties.town);
		$("#max").text(data.finalres.properties.price.max);
		$("#min").text(data.finalres.properties.price.min);
		$("#averrage").text(data.finalres.properties.price.averrage);
		
		if(data.finalres.properties.deal == 1)
		{
		
			$(".app__hello").text("Good Deal !");
			$('.app__user-photo').attr('src','./img/Thumbs_Up.png');
		}
		else
		{
			$(".app__hello").text("Bad Deal !");
			$('.app__user-photo').attr('src','./img/Thumbs_Down.png');
		}
			});
			
		});
		//$("#result").fadeOut();
		
		//$("#result").fadeIn();	


