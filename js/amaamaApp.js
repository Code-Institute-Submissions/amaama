angular.module('amaamaApp', ['ngRoute','amaamaDirective', 'amaamaController']);

angular.module('amaamaApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
});
