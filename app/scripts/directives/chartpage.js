'use strict';

angular.module('infoturismoApp').directive('chartpage', function () {
	return {
		replace: true,
		transclude: true,
      	templateUrl: 'templates/chartpage.html',
      	restrict: 'E'
    };
});
