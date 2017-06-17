angular.module('amaamaController',[])

.controller('MenuController', function($scope) {
	// the functions below are used from bootstrap template
      $('.navbar-collapse ul li a').on('click', function(event) {
        $('.navbar-toggle:visible').click();
      });
      $('#mainNav').affix({
              offset: {
                  top: 100
              }
      });    
      //end of functions used from bootstrap template
})

.controller('ScrollController', function($scope) {
	// the function below is used from bootstrap template
	$('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
      });      
    //end of function used from bootstrap template
})

.controller('IconController', function($scope) {
	// the function below is used from bootstrap template
	  window.sr = ScrollReveal();
      sr.reveal('.sr-icons', {
          duration: 600,
          scale: 0.3,
          distance: '0px'
      }, 200);
    //end of function used from bootstrap template
})

.controller('ButtonController', function($scope) {
	// the function below is used from bootstrap template
      sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
      });
    //end of function used from bootstrap template
})

.controller('ImageController', function($scope) {
      sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
      });
})

.controller('ReservationController', function($scope) {
	$("#submitMessage").hide();
    $("form").on("submit", function showMessage() {
    	$("form").fadeOut(400);
    	$("#submitMessage").delay(400).fadeIn(400);
    	event.preventDefault();
    });
});
