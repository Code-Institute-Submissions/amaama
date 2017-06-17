angular.module('amaamaDirective',[])

.directive('navDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navDirective.html',
    controler: ['MenuController', 'ScrollController']
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
    controller: ['ScrollController', 'IconController', 'ButtonController']
  };
})

.directive('menusDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/menusDirective.html',
    controller: ['ButtonController', 'ImageController']
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
    controller: ['ButtonController', 'ReservationController']
  };
})

.directive('footerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/footerDirective.html'
  };
});
