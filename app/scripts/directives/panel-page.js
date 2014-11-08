'use strict';

angular.module('infoturismoApp').directive('panelPage', function () {
	return {
		replace: true,
		transclude: true,
      	templateUrl: 'templates/panel-page.html',
      	restrict: 'E'
    };
});
