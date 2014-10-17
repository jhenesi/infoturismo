'use strict';

angular.module('infoturismoApp').controller('LayoutCtrl', ['$scope', '$routeParams', 'labels', 'icons', function ($scope, $routeParams, labels, icons) {
	$scope.isFiltersToggled = false;
	$scope.activeItem = 1;

	$scope.labels = labels;
	$scope.menuIcons = icons.menu;

	$scope.toggleFilters = function() {
		$scope.isFiltersToggled = !$scope.isFiltersToggled;
	};

    $scope.$on('$routeChangeSuccess', function () {
        var sectionId = $routeParams.sectionId;

        if(sectionId === "acceso")
        	 $scope.activeItem = 2;
        else
        	 $scope.activeItem = 1;
    });
}]);
