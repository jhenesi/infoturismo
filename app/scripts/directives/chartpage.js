'use strict';

angular.module('infoturismoApp').directive('chartpage', function () {
	return {
      	templateUrl: '/templates/chartpage.html',
      	restrict: 'E',
      	link: function postLink(scope, element, attrs) {
        	element.text('this is the chartpage directive');
      	}
    };
});
