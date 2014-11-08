'use strict';

angular.module('infoturismoApp').controller('LayoutCtrl', ['$scope', '$routeParams', '$location', 'labels', 'icons', function ($scope, $routeParams, $location, labels, icons) {
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
        else if(sectionId === "atractivos")
             $scope.activeItem = 3;
        else if(sectionId === "consumo")
             $scope.activeItem = 4;
        else if(sectionId === "costo")
             $scope.activeItem = 5;
        else if(sectionId === "experiencia")
             $scope.activeItem = 6;
          else if(sectionId === "imagen")
             $scope.activeItem = 7;
          else if(sectionId === "satisfaccion")
             $scope.activeItem = 8;
        else
             $scope.activeItem = 1;
    });

    $scope.filterMenu = 'views/partials/filter-menu-acceso.html';
}]);
