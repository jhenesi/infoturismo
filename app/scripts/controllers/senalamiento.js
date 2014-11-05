'use strict';

angular.module('infoturismoApp').controller('SenalamientoCtrl', [
	'$scope',
	'labels',
	'icons',
	'crumbs',
	function (
		$scope,
		labels,
		icons,
		crumbs
	) {
   		$scope.title = labels.senalamiento;
		$scope.titleIcon = '';

		var breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAcceso()).addCrumb(crumbs.getAccesoSenalamiento());

   		$scope.navegacion = breadcrumbs;
	}
]);
