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
      .when('/acceso', {
        templateUrl: 'views/first.html',
        controller: 'FirstCtrl'
      })
      .when('/acceso/senalamiento', {
        templateUrl: 'views/second.html',
        controller: 'SenalamientoCtrl'
      })
      /*.
      when('/acceso', {
        templateUrl: 'views/first.html',
        controller: 'AccesoCtrl'
      }).
      when('/acceso/senalamiento', {
        templateUrl: 'views/second.html',
        controller: 'SenalamientoCtrl'
      }).
      when('/consumo', {
        templateUrl: 'views/consumo.html',
        controller: 'ConsumoCtrl'
      }).
      when('/consumo/hospedaje', {
        templateUrl: 'views/first.html',
        controller: 'HospedajeCtrl'
      }).
      when('/consumo/hospedaje/percepcion', {
        templateUrl: 'views/second.html',
        controller: 'HospedajePercepcionCtrl'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });
