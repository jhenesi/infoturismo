'use strict';

/**
 * @ngdoc function
 * @name infoturismoApp.controller:FilterBarCtrl
 * @description
 * # FilterBarCtrl
 * Controller of the infoturismoApp
 */
angular.module('infoturismoApp')
  .controller('FilterBarCtrl', function ($scope) {
  	$scope.click = function () {
  		console.log($scope.autobus);
  	}
  });
