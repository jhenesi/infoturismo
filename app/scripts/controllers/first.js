'use strict';

angular.module('infoturismoApp').controller('FirstCtrl', [
	'$scope', 
	'$window',
	'$location',
	'labels', 
	'icons', 
	'crumbs', 
	'routes', 
	'infoturismoWebApi', 
	function (
		$scope, 
		$window,
		$location,
		labels, 
		icons, 
		crumbs, 
		routes, 
		infoturismoWebApi
	) {
		var getConfig = function (route) {
			var config = {};

			config['/acceso'] = {
		        title: labels.acceso,
		        icon: icons.acceso,
		        rutas: {},
		        getData: infoturismoWebApi.getAccesoOverviewData
		    };

		    config['/acceso'].breadcrumb = crumbs.getGeneral();
		    config['/acceso'].breadcrumb.addCrumb(crumbs.getAcceso()),


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

			return config[route];
		};

		var route = $location.url(),
			config = getConfig(route);

		$scope.title = config.title;
      	$scope.titleIcon = config.icon;
      	$scope.navegacion = config.breadcrumb;

      	$scope.onLabelClick = function(e){
        	$window.location = config
          		.rutas[angular.element(e.target).text()];
      	};

		config.getData()
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
