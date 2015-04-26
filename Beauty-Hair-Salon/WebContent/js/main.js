// Animated Scroll Function

function goToByScroll(id){
	jQuery('html,body').animate({scrollTop: jQuery(id).offset().top-140},'slow');
}

// ANIMATIONS
new WOW().init();

$(document).ready(function() {

	// When #scroll is clicked
	jQuery('a[href^="#"]').click(function(){
		// Scroll
		goToByScroll(jQuery(this).attr('href'));
		jQuery(".navbar-collapse").removeClass('in');
		jQuery(".navbar-collapse").addClass('collapse');
		window.location.hash = jQuery(this).attr('href');
	});

	// Change active class
	jQuery('.nav a[href^="#"]').click(function(){
		jQuery('ul.nav > li').removeClass('active');
		if(!jQuery(this).hasClass('active')) 
			jQuery(this).parent().addClass('active');
		else
			jQuery(this).parent().removeClass('active');

		return false;
	});

});

$(window).load(function(){

	// Animate scroll to hash div
	if (window.location.hash != '') {
		goToByScroll(window.location.hash);
	}

	// Show hide menu
	$(window).trigger('scroll');
	
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	});
	$('#step1').css("visibility","visible");
	$('#step1').addClass('animated fadeIn');
	$('#step1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', step2());
	
	
	function step2(){
		$('#step2').css("visibility","visible");
		$('#step2').addClass('animated fadeIn');
		$('#step2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', step3());
	}
	
	function step3(){
		$('#step3').css("visibility","visible");
		$('#step3').addClass('animated slideInLeft');
	}
});

$(window).on('scroll', function() {

	if($('.slider-wrapper').length>0){
		var header = $(".navbar");
		var h=$('.slider-wrapper').offset().top+$('.slider-wrapper').outerHeight()-160;
	    if ($(this).scrollTop() > h) {
	        if (!header.data('faded')) header.data('faded', 1).stop(true).fadeTo(400, 1);
	    } else if (header.data('faded')) {
	        header.data('faded', 0).stop(true).fadeTo(400, 0);
	    }
	}

});
