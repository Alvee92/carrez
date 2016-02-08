

$("#compute").click(function () {
	
	var post_url = $("#url").val();
	$.post('./url', {
		url: post_url
		
	}, function (data,error) {
	
		if(data.error == null){
		$('.app__bot').fadeIn();
		$('.app__price').fadeIn();
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
	}
	else
	{
		$(".app__hello").text(data.error);
		$('.app__bot').fadeOut();
		$('.app__price').fadeOut();
		$('.app__user-photo').attr('src','./img/error.png');

	}
			});
			
		});
		
		//$("#result").fadeOut();
		
		//$("#result").fadeIn();	


