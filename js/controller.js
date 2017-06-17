angular.module('amaamaController',[])

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
});
