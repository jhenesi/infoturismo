'use strict';

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
      .when('/acceso', {
        templateUrl: 'views/first.html',
        controller: 'FirstCtrl'
      })
      .when('/acceso/senalamiento', {
        templateUrl: 'views/second.html',
        controller: 'SecondCtrl'
      })
      .when('/consumo', {
        templateUrl: 'views/sections.html',
        controller: 'SectionsCtrl'
      })
      .when('/consumo/hospedaje', {
        templateUrl: 'views/first.html',
        controller: 'FirstCtrl'
      })
      .when('/consumo/hospedaje/percepcion', {
        templateUrl: 'views/second.html',
        controller: 'SecondCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
