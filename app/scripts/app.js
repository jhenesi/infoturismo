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
      .when('/:sectionId', {
        templateUrl: 'views/first.html',
        controller: 'FirstCtrl'
      })
      .when('/:sectionId/:reactivoId', {
        templateUrl: 'views/second.html',
        controller: 'SecondCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
