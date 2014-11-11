'use strict';

/**
 * @ngdoc directive
 * @name infoturismoApp.directive:chartColumn
 * @description
 * # chartColumn
 */
angular.module('infoturismoApp')
  .directive('chartColumn', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the chartColumn directive');
      }
    };
  });
