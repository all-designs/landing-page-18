(function ($) {


	// slider
	$(".video_slider").slick({
		autoplay: false,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: ".pre_btn",
		nextArrow: ".nex_btn",
		centerMode: true,
	});

	$(".work_slider").slick({
		autoplay: false,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: ".pre_btn",
		nextArrow: ".nex_btn",
		centerMode: true,
	});


})(window.jQuery);