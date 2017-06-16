angular.module('amaamaApp', ['amaamaDirective']);

angular.module('amaamaDirective',[])

.directive('navDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navDirective.html'
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
    templateUrl: 'templates/aboutDirective.html'
  };
})

.directive('menusDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/menusDirective.html'
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
    templateUrl: 'templates/reservationDirective.html'
  };
})

.directive('footerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/footerDirective.html'
  };
});