angular.module('amaamaApp', ['ngRoute','amaamaDirective']);

angular.module('amaamaApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
});

angular.module('amaamaDirective',[])

.directive('navDirective', 'aboutDirective', function(){
  return {
    restrict: 'A',
    link: function(scope,element){
    // the function below is used from bootstrap template
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
      //end of function used from bootstrap template      
    }
  };
})

.directive('navDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navDirective.html',
    link: function(scope,element){
      // the function below is used from bootstrap template
      $('#mainNav').affix({
              offset: {
                  top: 100
              }
          });        
      //end of function used from bootstrap template
    }
  };
})

.directive('headerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/headerDirective.html'
  };
})

.directive('aboutDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/aboutDirective.html',
    link: function(scope,element){
      // functions below are used from bootstrap template
      window.sr = ScrollReveal();
      sr.reveal('.sr-icons', {
          duration: 600,
          scale: 0.3,
          distance: '0px'
      }, 200);
      sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
      });
      //end of functions used from bootstrap template
    }
  };
})

.directive('menusDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/menusDirective.html',
    link: function (scope,element){
      // the function below is used from bootstrap template
      sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
      });
      //end of function used from bootstrap template
      sr.reveal(".sr-image", {
        duration: 1000,
        delay: 200
      });
    }
  };
})

.directive('galleryDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/galleryDirective.html'
  };
})

.directive('reservationDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/reservationDirective.html',
    link: function(scope, element){      
      $("#submitMessage").hide();
      // the function below is used from bootstrap template
      sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
      });
      //end of function used from bootstrap template
      $("form").on("submit", function showMessage() {
        $("form").fadeOut(400);
        $("#submitMessage").delay(400).fadeIn(400);
        event.preventDefault();
      });
      }
  };
})

.directive('footerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/footerDirective.html'
  };
});