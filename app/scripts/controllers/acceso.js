'use strict';

angular.module('infoturismoApp').controller('AccesoCtrl', [
	'$scope', 
	'$sce', 
	'$window', 
	'labels', 
	'icons', 
	'crumbs', 
	'routes', 
	'infoturismoWebApi', 
	function (
		$scope, 
		$sce, 
		$window, 
		labels, 
		icons, 
		crumbs, 
		routes, 
		infoturismoWebApi
	) {
		$scope.title = labels.acceso;
		$scope.titleIcon = icons.acceso;

		var breadcrumbs = crumbs.getGeneral();

		breadcrumbs.addCrumb(crumbs.getAcceso());

		$scope.navegacion = breadcrumbs;

		$scope.onLabelClick = function(e){
			if($(e.target).text() === $scope.datos.categories[0]) {
				$window.location = routes.acceso.reactivos.senalamiento.path;
			}
			if($(e.target).text() === $scope.datos.categories[1]) {
				$window.location = routes.acceso.reactivos.opciones.path;
			}
			if($(e.target).text() === $scope.datos.categories[2]) {
				$window.location = routes.acceso.reactivos.calidad.path;
			}
			if($(e.target).text() === $scope.datos.categories[3]) {
				$window.location = routes.acceso.reactivos.mantenimiento.path;
			}
			if($(e.target).text() === $scope.datos.categories[4]) {
				$window.location = routes.acceso.reactivos.atencion.path;
			}
		};

		infoturismoWebApi.getAccesoOverviewData()
			.success(function(data, status, headers, config) {
		    	var categories, values;

		    	values = data.map(function(item) {
		    		return item.Promedio;
		    	});

		        $scope.datos = {
		            categories: [
		            	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
		            	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
		            	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
		            	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
		            	$sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre))
		    		],
		            series: [{
		                name: 'Promedio',
		                data: [
							data[0].Promedio,
							data[1].Promedio,
							data[2].Promedio,
							data[3].Promedio,
							data[4].Promedio,
		                ]
		            }]
		        };
		    })
		    .error(function(data, status, headers, config) {
		    });
	}
]);
