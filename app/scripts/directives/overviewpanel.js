'use strict';

angular.module('infoturismoApp').directive('overviewPanel', function () {
    return {
		scope: {
			type: '@',
			icon: '@',
			score: '@',
			category: '@',
			go: '@'
		},
		replace: true,
		transclude: true,
      	templateUrl: 'templates/overviewpanel.html',
      	restrict: 'E'
    };
});
