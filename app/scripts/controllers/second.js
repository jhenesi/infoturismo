'use strict';

angular.module('infoturismoApp').controller('SecondCtrl', [
	'$scope', 
	'$location',
	'labels', 
	'icons', 
	'crumbs', 
	'infoturismoWebApi', 
	function (
		$scope, 
		$location,
		labels, 
		icons, 
		crumbs, 
		infoturismoWebApi
	) {
		var getConfig = function(route) {
			var config = {};

			config['/acceso/senalamiento'] = {
				title: labels.senalamiento,
				icon: icons.pieChart,
   				getData: infoturismoWebApi.getSenalamientoOverviewData
			}

			var senalamiento = config['/acceso/senalamiento'];

			senalamiento.breadcrumb = 
				crumbs.getGeneral();
   					
   			senalamiento.breadcrumb
   				.addCrumb(crumbs.getAcceso())
   				.addCrumb(crumbs.getAccesoSenalamiento());

   			config['/consumo/hospedaje/percepcion'] = {
   				title: labels.hospedajePercepcion,
   				icon: icons.pieChart,
   				getData: infoturismoWebApi.getHospedajePercepcionOverviewData
   			}

   			var consumoHospedajePercepcion = config['/consumo/hospedaje/percepcion'];

   			consumoHospedajePercepcion.breadcrumb =
   				crumbs.getGeneral();

   			consumoHospedajePercepcion.breadcrumb
				.addCrumb(crumbs.getConsumo())
   				.addCrumb(crumbs.getHospedaje())
   				.addCrumb(crumbs.getHospedajePercepcion());
   				
			return config[route];
		};

		var route = $location.url(),
			config = getConfig(route);

		$scope.title = config.title;
      	$scope.titleIcon = config.icon;
      	$scope.navegacion = config.breadcrumb;

      	console.log(config.breadcrumb)

   		config.getData()
			.success(function(data, status, headers, config) {
				var seriesData = [];

				angular.forEach(data, function(item, i) {
					seriesData.push([
						item.Nombre, item.Total
					]);
				});

            	$scope.datos = [{
            		name: 'Porcentaje',
             		data: seriesData
       			}];
        	})
        	.error(function(data, status, headers, config) {
        	});
	}
]);
