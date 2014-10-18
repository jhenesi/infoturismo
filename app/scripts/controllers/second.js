'use strict';

angular.module('infoturismoApp').controller('SecondCtrl', ['$scope', '$window', '$routeParams', '$sce', 'infoturismoWebApi', 'labels', 'icons', 'routes', 'crumbs', function ($scope, $window, $routeParams, $sce, infoturismoWebApi, labels, icons, routes, crumbs) {
	var reactivoId, breadcrumbs;

	reactivoId = $routeParams.reactivoId;

	if(reactivoId === "senalamiento") {
		$scope.title = labels.senalamiento;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAcceso()).addCrumb(crumbs.getSenalamiento());

   		$scope.navegacion = breadcrumbs;
	}
}]);
