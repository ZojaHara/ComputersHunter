;(function() {

		var form = document.querySelector("#myForm");
		var select = document.querySelectorAll(".select");


			var elems = [];
			function selectValue() {
				for(var i=0;i<select.length;i++) {
					if(select[i].value==="") {
						elems.push("hej");
					}
				}
				console.log(elems);
			}


			function displayBox() {
				selectValue();
				if(elems.length===0) {
					console.log("foto");
				}else {
					console.log("alert");
				}

			}



		form.addEventListener("submit", function(e){

			e.preventDefault();
			displayBox();


		}, false);


})();


(function($) {


	$(document).ready(function() {

		$('a').on('click', function(event) {

		var target = $( $(this).attr('href') );

			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
				scrollTop: target.offset().top
			}, 700);
		}
	});

});



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
					top:0
				},1000, "linear");
			});

			$(".menu__words-blue").each(function() {
				$(this).animate({
					fontSize:0
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

			$(".menu__words-blue").each(function() {
				$(this).animate({
					fontSize:"9vmin"
				},1000, "linear");
			});


	});

})(jQuery);
