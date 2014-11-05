'use strict';

angular.module('infoturismoApp').controller('HospedajeCtrl', [
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
	$scope.title = labels.hospedaje;
   	$scope.titleIcon = icons.hospedaje;

   	var breadcrumbs = crumbs.getGeneral();

   	breadcrumbs
   		.addCrumb(crumbs.getConsumo())
   		.addCrumb(crumbs.getHospedaje());

   	$scope.navegacion = breadcrumbs;

   	$scope.onLabelClick = function(e){
    	if($(e.target).text() === $scope.datos.categories[0]) {
    		console.log("clicked!!!")
    	}
	};

	infoturismoWebApi.getHospedajeData()
		.success(function(data, status, headers, config) {
	   		var categories, values;

	    	values = data.map(function(item) {
	       		return item.Promedio;
	      	});

            $scope.datos = {
                categories: [
                	data[0].Nombre,
                	data[1].Nombre,
                	data[2].Nombre,
                	data[3].Nombre
        		],
                series: [{
                    name: 'Promedio',
                    data: [
						data[0].Promedio,
						data[1].Promedio,
						data[2].Promedio,
						data[3].Promedio
                    ]
                }]
            };
        })
        .error(function(data, status, headers, config) {
        });
}]);
