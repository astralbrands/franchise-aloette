/*
 * Pet Clinic - HTML5 Template
 *
 * Author: www.matchthemes.com
 *
 */
 
(function($) {
	"use strict";
	$(window).load(function(){
	$(".petLoading").delay(250).fadeOut({ duration: 750 });
	gallery_load();
});
	
$('#slides').superslides({ animation: 'fade', play: 4000 });

// MENU NAVIGATION
	
$('.menu-nav li a[href*=#], a.btn-go[href*=#], a.badge-GS[href*=#]').click(function() {
	var headerH = $('.navbar').height() - 1;
	$("html, body").animate({
		scrollTop: $($(this.hash)).offset().top - (headerH + 16)  + "px"
	}, {
		duration: 1000,
		easing: "easeInOutExpo"
	});
	return false;
});
// END MENU NAVIGATION

(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider;
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 1 :
           (window.innerWidth < 900) ? 2 : 3;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $window.load(function() {
    $('.flexslider-testimonials').flexslider({
      animation: "slide",
      animationLoop: true,
			slideshowSpeed: 10000,
			animationSpeed: 800,
			directionNav: true,
			controlNav: false,
			useCSS: false,
      itemWidth: 260,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());

	$(".portfolio-img a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		autoplay_slideshow: true,
		slideshow: 5000
	});
		
	$('#myModal').on('hidden.bs.modal', function () {
		$(this).removeData('bs.modal');
		$(this).find('.modal-body').html('');
	});
})(jQuery);

function gallery_load(){
	"use strict";
	
	// cache container
	var portfolioItems = $('#portfolio-items');
	// initialize isotope
	portfolioItems.isotope({
		itemSelector : '.portfolio-item',
		layoutMode : 'fitRows'
	});

	// filter items when filter link is clicked
	$('#portfolio-filter a').click(function(){
		$('#portfolio-filter .current').removeClass('current');
		$(this).addClass('current');
		var selector = $(this).attr('data-filter');
		portfolioItems.isotope({ filter: selector });
		return false;
	});

}