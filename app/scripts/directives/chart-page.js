'use strict';

angular.module('infoturismoApp').directive('chartPage', function () {
	return {
		replace: true,
		transclude: true,
      	templateUrl: 'templates/chart-page.html',
      	restrict: 'E'
    };
});
