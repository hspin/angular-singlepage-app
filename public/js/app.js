'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/hello', {
      templateUrl: 'partials/one',
      controller: 'MyCtrl1'
    }).
    otherwise({
      redirectTo: '/hello'
    });

  $locationProvider.html5Mode(true);
});

