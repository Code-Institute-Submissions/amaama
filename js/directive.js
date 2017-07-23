angular.module('amaamaDirective',[])

.directive('navDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navDirective.html',
    controller: 'ScrollController',
    link: function(scope,element){
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
      $('li').on('click', function(event){        
        $(this).addClass('active');
        $(this).siblings(this).removeClass('active');
      }); 
    }
  };
})

.directive('headerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/headerDirective.html',
    controller: 'ScrollController'
  };
})

.directive('aboutDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/aboutDirective.html',
    controller: 'ScrollController',
    link: function(scope,element){
      // the functions below are used from bootstrap template     
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
