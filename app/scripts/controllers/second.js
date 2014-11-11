'use strict';

angular.module('infoturismoApp').controller('SecondCtrl', [
	'$scope', 
	'$location',
	'labels', 
	'icons', 
	'crumbs',
	'filters',
	'infoturismoWebApi', 
	function (
		$scope, 
		$location,
		labels, 
		icons, 
		crumbs, 
		filters,
		infoturismoWebApi
	) {
		var getConfig = function(route) {
			$scope.template = 'views/partials/second-pie.html';
			$scope.filters = filters;
			
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

        $scope.$watch('filters', function() {
			if($scope.filters.filterBy !== "") {
        		$scope.template = 'views/partials/second-column.html';

        		config.getData($scope.filters.filterBy)
        			.success(function(data, status, headers, config) {
        				var categories, values, series, chartData;

        				chartData = [];
	          			categories = [];
	          			series = {};

	          			angular.forEach(data, function(item, i) {
			            	categories.push(item.Nombre);
			            	angular.forEach(item.Datos, function(element, j){
			            		series[element.Clave] = series[element.Clave] || {
			            			name: element.Nombre,
			            			data: [],
			            			stack: 'Calificacion'
			            		};
			            		series[element.Clave].data.push(element.Total);
			            	});
			          	});

			          	angular.forEach(Object.keys(series), function(keys, i) {
			          		chartData.push(series[keys]);
			          	});

			          	$scope.groupedData = {
			          		categories: categories,
	                		series: chartData
			          	};
			          	$scope.groupedTitle = "Agrupado por Motivo de Viaje";
        			});
        	}
         	else {
          		$scope.template = 'views/partials/second-pie.html';
      		}
       	}, true);
	}
]);
