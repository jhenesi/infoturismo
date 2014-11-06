'use strict';

angular.module('infoturismoApp').controller('HospedajePercepcionCtrl', [
	'$scope',
	'labels',
	'icons',
	'crumbs',
	'infoturismoWebApi',
	function (
		$scope,
		labels,
		icons,
		crumbs,
		infoturismoWebApi
	) {
		var breadcrumbs = crumbs.getGeneral();

		$scope.title = labels.hospedajePercepcion;
		$scope.titleIcon = icons.pieChart;

  		breadcrumbs
   			.addCrumb(crumbs.getConsumo())
   			.addCrumb(crumbs.getHospedaje())
   			.addCrumb(crumbs.getHospedajePercepcion());

		$scope.navegacion = breadcrumbs;

		infoturismoWebApi.getHospedajePercepcionOverviewData()
		  .success(function(data, status, headers, config) {
	   		var categories, values;
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
