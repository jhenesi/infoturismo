'use strict';

/**
 * @ngdoc overview
 * @name infoturismoApp
 * @description
 * # infoturismoApp
 *
 * Main module of the application.
 */
angular
  .module('infoturismoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/first', {
        templateUrl: 'views/first.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
