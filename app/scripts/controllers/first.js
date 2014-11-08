'use strict';

angular.module('infoturismoApp').controller('FirstCtrl', [
	'$scope', 
	'$window',
	'$location',
	'labels', 
	'icons', 
	'crumbs', 
	'routes', 
	'filters',
	'infoturismoWebApi', 
	function (
		$scope, 
		$window,
		$location,
		labels, 
		icons, 
		crumbs, 
		routes, 
		filters,
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

		    var acceso = config['/acceso'];

		    acceso.breadcrumb = crumbs.getGeneral();
		    acceso.breadcrumb.addCrumb(crumbs.getAcceso()),


		    acceso.rutas['Señalamiento para Arribar'] = 
		    	routes.acceso.senalamiento.path;
			acceso.rutas['Opciones de Transporte para Arribar'] = 
				routes.acceso.opciones.path;
			acceso.rutas['Calidad de la Infraestructura de Acceso'] = 
				routes.acceso.calidad.path;
			acceso.rutas['Mantenimiento y Calidad del Medio de Transporte'] = 
				routes.acceso.mantenimiento.path;
			acceso.rutas['Atención del personal de Transporte'] = 
				routes.acceso.atencion.path;

			config['/consumo/hospedaje'] = {
				title: labels.hospedaje,
        		icon: icons.hospedaje,
        		rutas: {},
        		getData: infoturismoWebApi.getHospedajeOverviewData
			};

			var consumoHospedaje = config['/consumo/hospedaje'];

			consumoHospedaje.breadcrumb = crumbs.getGeneral();
			consumoHospedaje.breadcrumb
				.addCrumb(crumbs.getConsumo())
				.addCrumb(crumbs.getHospedaje());

			consumoHospedaje.rutas['Percepción General'] = 
	        	routes.consumo.hospedaje.percepcion.path;
	      	consumoHospedaje.rutas['Limpieza'] = 
	        	routes.consumo.hospedaje.limpieza.path;
	      	consumoHospedaje.rutas['Atención del personal'] = 
	        	routes.consumo.hospedaje.atencion.path;
	      	consumoHospedaje.rutas['Facilidad de Elección de Opción de Hospedaje'] = 
	        	routes.consumo.hospedaje.facilidadEleccion.path;

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
          		var categories, values, series, seriesArray;

	          	categories = [];
	          	series = {};

	          	angular.forEach(data, function(item, i) {
	            	categories.push(item.Nombre);

		        	series['global'] = series['global'] || {
		          		name: "Global",
		          		data: [],
		          		stack: 'global'
		          	};

					series['global'].data.push(item.Promedio);

	            	angular.forEach(item.Datos, function(datos, i) {
	            		series[datos.Nombre] = series[datos.Nombre] || {
	            			name: datos.Nombre,
	            			data: [],
	            			stack: datos.Nombre
	            		};
	            		series[datos.Nombre].data.push(datos.Promedio);
	            	});
	          	});


	          	seriesArray = [];

	          	angular.forEach(Object.keys(series), function(item, i) {
	          		seriesArray.push(series[item]);
	          	});

	            $scope.datos = {
	                categories: categories,
	                series: seriesArray
	            };
	        })
        	.error(function(data, status, headers, config) {
        	});
   	}
]);
