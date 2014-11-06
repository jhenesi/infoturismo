'use strict';

angular.module('infoturismoApp').controller('HospedajeCtrl', [
	'$scope',
  '$window',
	'labels', 
	'icons',
	'crumbs',
  'routes',
	'infoturismoWebApi',
	function (
		$scope, 
    $window,
		labels, 
		icons, 
		crumbs,
    routes,
		infoturismoWebApi
	) {

      var config = {};

      var route = '#/consumo/hospedaje';

      config[route] = {
        breadcrumb: crumbs.getGeneral()
          .addCrumb(crumbs.getConsumo())
          .addCrumb(crumbs.getHospedaje()),
        title: labels.hospedaje,
        icon: icons.hospedaje,
        rutas: {},
        getData: infoturismoWebApi.getHospedajeOverviewData
      };

      config[route].rutas['Percepción General'] = 
        routes.consumo.hospedaje.percepcion.path;
      config[route].rutas['Limpieza'] = 
        routes.consumo.hospedaje.limpieza.path;
      config[route].rutas['Atención del personal'] = 
        routes.consumo.hospedaje.atencion.path;
      config[route].rutas['Facilidad de Elección de Opción de Hospedaje'] = 
        routes.consumo.hospedaje.facilidadEleccion.path;

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
