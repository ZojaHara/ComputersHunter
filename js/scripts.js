;(function() {

		var form = document.querySelector("#myForm");
		var select = document.querySelectorAll(".select");

		var elemsTip = document.querySelector(".display__elems-tip");
		var elemsAlert = document.querySelector(".display__elems-alert");
		var elemsPhoto = document.querySelector(".display__elems-photo");

		function randomNumber(max, min) {
		 	return	Math.round(Math.random() * (max - min) + min);
		}

		function backgroundImage() {
			var imageNumber = randomNumber(1,9);
			elemsPhoto.style.cssText = "background:url(\"../pictures/comp_"+imageNumber+".jpg\") no-repeat";
			elemsPhoto.style.backgroundSize = "cover";
		}


			var elems = [];
			function selectValue() {
				for(var i=0;i<select.length;i++) {
					if(select[i].value==="") {
						elems.push(i);
					}
				}
				console.log(elems);
			}


			function displayBox() {
				selectValue();
				if(elems.length===0) {
					elemsAlert.classList.add("nonvisible");
					elemsTip.classList.add("nonvisible");
					elemsPhoto.classList.remove("nonvisible");
					backgroundImage();
				}else {
					elems = [];
					elemsAlert.classList.remove("nonvisible");
					elemsTip.classList.add("nonvisible");
					elemsPhoto.classList.add("nonvisible");
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
