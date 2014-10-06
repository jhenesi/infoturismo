'use strict';

angular.module('infoturismoApp').controller('GeneralCtrl', function ($scope) {
	$scope.categorias = [
        'Acceso al Destino e Infraestructura', 
        'Atractivos y Oferta Turistica', 
        'Consumo de Servicios', 
        'Costo',
        'Experiencia de Viajes', 
        'Imagen',
        'Satisfaccion y Recomendacion'
    ];

    $scope.series = [{
      name: 'Promedio',
      data: [9, 8, 7, 9, 10, 8, 9]
    }];

    $scope.onPointClick = function(eventArgs){
        console.log(eventArgs);
    };
});
