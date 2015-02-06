$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	})
	.mousedown(function(){
		// hadouken sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		// hadouken animated to the right of the screen
	})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
});