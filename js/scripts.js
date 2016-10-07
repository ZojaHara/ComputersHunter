// ;(function() {
//
//
//
// })();


(function($) {

	$(".menu__pic-hamburger").on("click", function() {

		$(this).animate({
			opacity:0
		}, 400, "linear");

		$(".menu__pic-arrow").delay(600).animate({
			opacity:1,
			zIndex:3
		},500,"linear");

			$(".menu__items").each(function() {
				$(this).animate({
					top:"0%"
				},1000, "linear");
			});
	});

	$(".menu__pic-arrow").on("click", function() {

		$(this).animate({
			opacity:0,
			zIndex:1
		}, 400, "linear");

		$(".menu__pic-hamburger").delay(600).animate({
			opacity:1,
		},500,"linear");

			$(".menu__items-left").animate({
					top:"-75%"
			},1000, "linear");

			$(".menu__items-right").animate({
					top:"75%"
			},1000, "linear");


	});

})(jQuery);
