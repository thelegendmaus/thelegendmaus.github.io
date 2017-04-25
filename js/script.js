$(document).ready(function(){ 
	
	
	$(".object").mousemove(function(e){ 
	$("#cube").css({"transform":"rotateX(" + e.pageY + "deg) rotateY(" + e.pageX + "deg)"}); 
	}); 
	
	
	
	
	$(".inline-obj1").click(function(){
		$(".side").removeClass("color2 color3 color4 color5 color6 color7 color8 color9 color10 color11 color12");
		$(".side").addClass("color1"); 
	});
	
	$(".inline-obj2").click(function(){
		$(".side").removeClass("color1 color3 color4 color5 color6 color7 color8 color9 color10 color11 color12");
		$(".side").addClass("color2"); 
	});
	
	$(".inline-obj3").click(function(){
		$(".side").removeClass("color1 color2 color4 color5 color6 color7 color8 color9 color10 color11 color12");
		$(".side").addClass("color3"); 
	});
	
	$(".inline-obj4").click(function(){
		$(".side").removeClass("color1 color2 color3 color5 color6 color7 color8 color9 color10 color11 color12");
		$(".side").addClass("color4"); 
	});
	
	$(".inline-obj5").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color6 color7 color8 color9 color10 color11 color12");
		$(".side").addClass("color5"); 
	});
	
	$(".inline-obj6").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color5 color7 color8 color9 color10 color11 color12");
		$(".side").addClass("color6"); 
	});
	
	$(".inline-obj7").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color5 color6 color8 color9 color10 color11 color12");
		$(".side").addClass("color7"); 
	});
	
	$(".inline-obj8").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color5 color6 color7 color9 color10 color11 color12");
		$(".side").addClass("color8"); 
	});
	
	$(".inline-obj9").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color5 color6 color7 color8 color10 color11 color12");
		$(".side").addClass("color9"); 
	});
	
	$(".inline-obj10").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color5 color6 color7 color8 color9 color11 color12");
		$(".side").addClass("color10"); 
	});
	
	$(".inline-obj11").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color5 color6 color7 color8 color9 color10 color12");
		$(".side").addClass("color11"); 
	});
	
	$(".inline-obj12").click(function(){
		$(".side").removeClass("color1 color2 color3 color4 color5 color6 color7 color8 color9 color10 color11 ");
		$(".side").addClass("color12"); 
	});
	
	
	
	
	
});