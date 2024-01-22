$(document).ready(function(){
	$(".slider").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		loop: true,
		autoplayTimeout: 2000	
	});   


	$(".slider__snowboards").owlCarousel({
		items: 4,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		loop: true,
		autoplayTimeout: 2000,	
		center: true,
		navText: ['', '']
	});  


});
