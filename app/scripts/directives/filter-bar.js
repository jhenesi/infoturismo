'use strict';

angular.module('infoturismoApp').directive('filterBar', function () {
    return {
		replace: true,
      	templateUrl: 'templates/filterbar.html',
      	restrict: 'E'
    };
});
