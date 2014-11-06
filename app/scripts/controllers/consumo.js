'use strict';

angular.module('infoturismoApp').controller('ConsumoCtrl', [
	'$scope', 
	'$window', 
	'$routeParams', 
	'$sce', 
	'$filter', 
	'infoturismoWebApi', 
	'labels', 
	'icons', 
	'routes', 
	'crumbs', 
	function (
		$scope, 
		$window, 
		$routeParams, 
		$sce, 
		$filter, 
		infoturismoWebApi, 
		labels, 
		icons, 
		routes, 
		crumbs
	) {
		var breadcrumbs = crumbs.getGeneral();

		$scope.title = labels.consumo;
	 	$scope.titleIcon = icons.consumo;

	 	
	 	breadcrumbs = crumbs.getGeneral();
	  	breadcrumbs.addCrumb(crumbs.getConsumo());

	   	$scope.navegacion = breadcrumbs;

	   	$scope.datos = [{
			clave: 'Hospedaje',
			type: 'panel-primary',
			icon: icons.hospedaje,
			go: routes.consumo.hospedaje.path,
			score: '',
			category: '',
		},{
			clave: 'Alimentacion',
			type: 'panel-green',
			icon: icons.alimentacion,
			go: routes.consumo.alimentacion.path,
			score: '',
			category: '',
		},{
			clave: 'ServicioExcursion',
			type: 'panel-yellow',
			icon: icons.servicioExcursion,
			go: routes.consumo.servicioExcursion.path,
			score: '',
			category: '',
		},{
			clave: 'TransporteEstacionamiento',
			type: 'panel-red',
			icon: icons.transporteEstacionamiento,
			go: routes.consumo.transporteEstacionamiento.path,
			score: '',
			category: '',
		}];

		infoturismoWebApi.getConsumoOverviewData()
	        .success(function(data, status, headers, config) {
		        angular.forEach(data, function(item, i) {
		  			var dato = $filter('filter')($scope.datos, { clave: item.Clave })[0];
		  			dato.score = item.Promedio;
		  			dato.category = item.Nombre;
				});
	        })
	        .error(function(data, status, headers, config) {
	        });
	}
]);
