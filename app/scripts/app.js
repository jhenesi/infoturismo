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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
