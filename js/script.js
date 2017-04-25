$(document).ready(function(){
	
	$(".input-button").click(function(){
		alert("Successfully sent");
	});
	
	/* WORKING - добавление тени и цвета кнопке блоку */
	
	
	$(".block-info-1 .inline-block").hover(function(){
		$(".block-info-1 .inline-block").css("box-shadow","0 0 58px rgba(0, 0, 0, 0.2)");
		$(".block-info-1 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.10), 0 -1px 0px #4FB2F5 inset","transition":".3s"});
	}, function(){
		$(".block-info-1 .inline-block").css("box-shadow","0 0 0 white");
		$(".block-info-1 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.06), 0 0px 0px rgba(0, 0, 0, 0.1) inset","transition":".3s"});
	});
	
	$(".block-info-2 .inline-block").hover(function(){
		$(".block-info-2 .inline-block").css("box-shadow","0 0 58px rgba(0, 0, 0, 0.2)");
		$(".block-info-2 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.10), 0 -1px 0px #C04BF6 inset","transition":".3s"});
	}, function(){
		$(".block-info-2 .inline-block").css("box-shadow","0 0 0 white");
		$(".block-info-2 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.06), 0 0px 0px rgba(0, 0, 0, 0.1) inset","transition":".3s"});
	});
	
	$(".block-info-3 .inline-block").hover(function(){
		$(".block-info-3 .inline-block").css("box-shadow","0 0 58px rgba(0, 0, 0, 0.2)");
		$(".block-info-3 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.10), 0 -1px 0px #817EFD inset","transition":".3s"});
	}, function(){
		$(".block-info-3 .inline-block").css("box-shadow","0 0 0 white");
		$(".block-info-3 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.06), 0 0px 0px rgba(0, 0, 0, 0.1) inset","transition":".3s"});
	});
	
	$(".block-info-4 .inline-block").hover(function(){
		$(".block-info-4 .inline-block").css("box-shadow","0 0 58px rgba(0, 0, 0, 0.2)");
		$(".block-info-4 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.10), 0 -1px 0px #F6476F inset","transition":".3s"});
	}, function(){
		$(".block-info-4 .inline-block").css("box-shadow","0 0 0 white");
		$(".block-info-4 .button .inline-button").css({"box-shadow":"0 5px 15px rgba(0, 0, 0, 0.06), 0 0px 0px rgba(0, 0, 0, 0.1) inset","transition":".3s"});
	});
	
	/* FEATURED - добавление тени одному блоку */
	
	
	$(".inline-featured-work .block").each(function(){
		$(this).hover(function(){
			$(this).css({"box-shadow":"0 0 58px rgba(0, 0, 0, 0.27)","transition":".3s"});
		}, function(){
			$(this).css("box-shadow","0 0 0 white");
		});
	});
	
	/* SERVICES - смена текста */
	
	
	$(".inline-services .content .cont-1").click(function(){
		if($(".inline-services .content .p1").text() != "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum totam ad sint error porro. Consectetur, sunt, aperiam. Magni rem optio distinctio illum consequuntur delectus nulla illo aperiam itaque cumque."){
			$(this).css({"box-shadow":"0 0 55px rgba(100, 100, 100, 0.29)","background":"white"});
			$(".cont-2, .cont-3, .cont-4").css({"background":"#FAFAFA","border":"1px solid rgba(209, 209, 209, 0.18)","box-shadow":"0 0 0 white","transition":"1.1s"});
			$(".inline-services .content .p1").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum totam ad sint error porro. Consectetur, sunt, aperiam. Magni rem optio distinctio illum consequuntur delectus nulla illo aperiam itaque cumque.").fadeIn(1450);
			$(".inline-services .content .p2").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel officia vitae eveniet quam rem unde facilis.").fadeIn(1450);
			$(".inline-services .content .p3").hide().text("vitae eveniet quam rem unde facilis.").fadeIn(1450);
		}
	});
	$(".inline-services .content .cont-2").click(function(){
		if($(".inline-services .content .p1").text() != "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam laborum aut, totam autem illo debitis tempora laudantium impedit quo omnis unde accusamus nemo asperiores repellat aperiam esse earum natus perferendis."){
			$(this).css({"box-shadow":"0 0 55px rgba(100, 100, 100, 0.29)","background":"white"});
			$(".cont-1, .cont-3, .cont-4").css({"background":"#FAFAFA","border":"1px solid rgba(209, 209, 209, 0.18)","box-shadow":"0 0 0 white","transition":"1.1s"});
			$(".inline-services .content .p1").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam laborum aut, totam autem illo debitis tempora laudantium impedit quo omnis unde accusamus nemo asperiores repellat aperiam esse earum natus perferendis.").fadeIn(1450);
			$(".inline-services .content .p2").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quos error velit quia rem iure distinctio.").fadeIn(1450);
			$(".inline-services .content .p3").hide().text("lorem ipsum sit dolor amet, consectetur.").fadeIn(1450);
		}
	});
	$(".inline-services .content .cont-3").click(function(){
		if($(".inline-services .content .p1").text() != "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, corporis, vitae recusandae commodi delectus ipsam eos consequatur aperiam repellat sit corrupti dignissimos quis quod sint. Provident eligendi eos consequatur voluptatibus."){
			$(this).css({"box-shadow":"0 0 55px rgba(100, 100, 100, 0.29)","background":"white"});
			$(".cont-1, .cont-2, .cont-4").css({"background":"#FAFAFA","border":"1px solid rgba(209, 209, 209, 0.18)","box-shadow":"0 0 0 white","transition":"1.1s"});
			$(".inline-services .content .p1").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, corporis, vitae recusandae commodi delectus ipsam eos consequatur aperiam repellat sit corrupti dignissimos quis quod sint. Provident eligendi eos consequatur voluptatibus.").fadeIn(1450);
			$(".inline-services .content .p2").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, vitae modi quasi voluptatem officiis sint, quidem.").fadeIn(1450);
			$(".inline-services .content .p3").hide().text("lorem dolor amet, ipsum sit consectetur.").fadeIn(1450);
		}
	});
	$(".inline-services .content .cont-4").click(function(){
		if($(".inline-services .content .p1").text() != "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quidem possimus commodi reprehenderit, veniam obcaecati harum deleniti atque maiores! Consequuntur reprehenderit vero, alias quae neque aspernatur, sunt eligendi nihil laudantium!"){
			$(this).css({"box-shadow":"0 0 55px rgba(100, 100, 100, 0.29)","background":"white"});
			$(".cont-1, .cont-2, .cont-3").css({"background":"#FAFAFA","border":"1px solid rgba(209, 209, 209, 0.18)","box-shadow":"0 0 0 white","transition":"1.1s"});
			$(".inline-services .content .p1").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quidem possimus commodi reprehenderit, veniam obcaecati harum deleniti atque maiores! Consequuntur reprehenderit vero, alias quae neque aspernatur, sunt eligendi nihil laudantium!").fadeIn(1450);
			$(".inline-services .content .p2").hide().text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nobis voluptatibus quam, aliquid, culpa repellendus sit.").fadeIn(1450);
			$(".inline-services .content .p3").hide().text("lorem dolor sit consectetur amet, ipsum.").fadeIn(1450);
		}
	});
	
	/* SERVICES - запрет на перетаскивание картинок */
	
	
	$(".inline-services .content .cont-1, .cont-2, .cont-3, .cont-4").mousedown(function(e){
		e.preventDefault();
	});
	
	
	/* TEAM - скрывание и позывание блоков */
	
	
	$(".inline-team .cont .block-2").hide();
	
	$(".inline-team .cont .block-1").click(function(){
		$(this).fadeOut(1100);
		$(".cont .info-block-1").css({"box-shadow":"0 0 55px rgba(142, 142, 142, 0.23)","transition":"1s"});
		$(".cont .info-block-2").css("box-shadow","0 0 0 #FAFAFA");
		$(".cont .info-block-3").css("box-shadow","0 0 0 #FAFAFA");
		$(".inline-team .cont .block-2").fadeIn(700);
		$(".inline-team .cont .block-3").fadeIn(700);
	});
	$(".inline-team .cont .block-2").click(function(){
		$(this).fadeOut(1100);
		$(".cont .info-block-1").css("box-shadow","0 0 0 #FAFAFA");
		$(".cont .info-block-2").css({"box-shadow":"0 0 55px rgba(142, 142, 142, 0.23)","transition":"1s"});
		$(".cont .info-block-3").css("box-shadow","0 0 0 #FAFAFA");
		$(".inline-team .cont .block-1").fadeIn(700);
		$(".inline-team .cont .block-3").fadeIn(700);
	});
	$(".inline-team .cont .block-3").click(function(){
		$(this).fadeOut(1100);
		$(".cont .info-block-1").css("box-shadow","0 0 0 #FAFAFA");
		$(".cont .info-block-2").css("box-shadow","0 0 0 #FAFAFA");
		$(".cont .info-block-3").css({"box-shadow":"0 0 55px rgba(142, 142, 142, 0.23)","transition":"1s"});
		$(".inline-team .cont .block-1").fadeIn(700);
		$(".inline-team .cont .block-2").fadeIn(700);
	});
	
	/* CLIENT - слайдер */
	
	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;

	function nextSlide() {
		goToSlide(currentSlide+1);
	}

	function previousSlide() {
		goToSlide(currentSlide-1);
	}

	function goToSlide(n) {
		 slides[currentSlide].className = 'slide';
		 currentSlide = (n+slides.length)%slides.length;
		 slides[currentSlide].className = 'slide showing';
	}
	
	/* Кнопки Следующий и Предыдущий слайд */
	
	var next = document.getElementById('next');
	var previous = document.getElementById('previous');

	next.onclick = function() {
		 nextSlide();
	};
	previous.onclick = function() {
		 previousSlide();
	};
	
	/* CLIENT - наводка */
	
	$(".inline-client .left-info").hover(function(){
		$(this).css({"border":"1px solid white","box-shadow":"0 0 35px rgba(192, 192, 192, 0.43)","transition":".3s"});
		$(".inline-client .left-info .circle").css({"border":"1px solid rgba(192, 192, 192, 0.79)","transition":".3s"});
	}, function(){
		$(this).css({"border":"1px solid silver","box-shadow":"0 0 35px white"});
		$(".inline-client .left-info .circle").css({"border":"1px solid silver","box-shadow":"0 0 35px white"});
	});
	
	$(".inline-client .right-info").hover(function(){
		$(this).css({"border":"1px solid white","box-shadow":"0 0 35px rgba(192, 192, 192, 0.43)","transition":".3s"});
		$(".inline-client .left-info .circle").css({"border":"1px solid rgba(192, 192, 192, 0.79)","transition":".3s"});
	}, function(){
		$(this).css({"border":"1px solid silver","box-shadow":"0 0 35px white"});
		$(".inline-client .right-info .circle").css({"border":"1px solid silver","box-shadow":"0 0 35px white"});
	});
	
	$(".inline-client #previous").hover(function(){
		$(this).css({"background":"#FF6D47","transition":".3s"});
		$(".inline-client .arrow-left").css({"border":"4px solid white","border-bottom":"3px solid #FF6D47","border-right":"3px solid#FF6D47","border-top-right-radius":"5px","border-bottom-left-radius":"5px","transition":".3s"});
	}, function(){
		$(this).css({"background":"white"});
		$(".inline-client .arrow-left").css({"border":"4px solid black","border-bottom":"3px solid white","border-right":"3px solid white","border-top-right-radius":"5px","border-bottom-left-radius":"5px"});
	});
	
	$(".inline-client #next").hover(function(){
		$(this).css({"background":"#FF6D47","transition":".3s"});
		$(".inline-client .arrow-right").css({"border":"4px solid white","border-bottom":"3px solid #FF6D47","border-right":"3px solid#FF6D47","border-top-right-radius":"5px","border-bottom-left-radius":"5px","transition":".3s"});
	}, function(){
		$(this).css({"background":"white"});
		$(".inline-client .arrow-right").css({"border":"4px solid black","border-bottom":"3px solid white","border-right":"3px solid white","border-top-right-radius":"5px","border-bottom-left-radius":"5px"});
	});
	
	
	
	
});