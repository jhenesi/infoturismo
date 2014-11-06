'use strict';

angular.module('infoturismoApp').controller('AccesoCtrl', [
	'$scope', 
	'$sce', 
	'$window',
	'$location',
	'labels', 
	'icons', 
	'crumbs', 
	'routes', 
	'infoturismoWebApi', 
	function (
		$scope, 
		$sce, 
		$window,
		$location,
		labels, 
		icons, 
		crumbs, 
		routes, 
		infoturismoWebApi
	) {
		var route = $location.url(),
			config = {};

		config['/acceso'] = {
	        breadcrumb: crumbs.getGeneral()
	        	.addCrumb(crumbs.getAcceso()),
	        title: labels.acceso,
	        icon: icons.acceso,
	        rutas: {},
	        getData: infoturismoWebApi.getAccesoOverviewData
	    };

	    config['/acceso'].rutas['Señalamiento para Arribar'] = 
	    	routes.acceso.senalamiento.path;
		config['/acceso'].rutas['Opciones de Transporte para Arribar'] = 
			routes.acceso.opciones.path;
		config['/acceso'].rutas['Calidad de la Infraestructura de Acceso'] = 
			routes.acceso.calidad.path;
		config['/acceso'].rutas['Mantenimiento y Calidad del Medio de Transporte'] = 
			routes.acceso.mantenimiento.path;
		config['/acceso'].rutas['Atención del personal de Transporte'] = 
			routes.acceso.atencion.path;

		$scope.title = config[route].title;
      	$scope.titleIcon = config[route].icons;
      	$scope.navegacion = config[route].breadcrumb;

      	$scope.onLabelClick = function(e){
        	$window.location = config[route]
          		.rutas[angular.element(e.target).text()];
      	};

		config[route].getData()
      		.success(function(data, status, headers, config) {
          		var categories, values;

	          	categories = [];
	          	values = [];

	          	angular.forEach(data, function(item, i) {
	            	categories.push(item.Nombre);
	            	values.push(item.Promedio)
	          	});

	            $scope.datos = {
	                categories: categories,
	                series: [{
	                    name: 'Promedio',
	                    data: values
	                }]
	            };
	        })
        	.error(function(data, status, headers, config) {
        	});
	}
]);
