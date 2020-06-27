$(document).ready(function () {
	$('.icon__menu').click(function (event) {
		$('.icon__menu, .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.slider__body').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 1,

	});
});