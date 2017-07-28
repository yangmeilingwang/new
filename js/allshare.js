$(document).ready(function(){
	$(".quests").click(function(){
		$(".st-cover-vr").slideToggle();
	});

})

	function sscroll() {
	$("html, body").animate({
		"scroll-top": 0
	}, "fast");
}