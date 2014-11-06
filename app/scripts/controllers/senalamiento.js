'use strict';

angular.module('infoturismoApp').controller('SenalamientoCtrl', [
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

			config['/acceso/senalamiento'].breadcrumb = 
				crumbs.getGeneral();
   					
   			config['/acceso/senalamiento'].breadcrumb
   				.addCrumb(crumbs.getAcceso())
   				.addCrumb(crumbs.getAccesoSenalamiento());

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
