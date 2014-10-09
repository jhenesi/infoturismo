'use strict';

angular.module('infoturismoApp').controller('GeneralCtrl', function ($scope) {
	$scope.categorias = [
        '<i class="fa fa-fw fa-taxi category-icon"></i> <span class="category-name">Acceso al Destino e Infraestructura</span>', 
        '<i class="fa fa-fw fa-map-marker category-icon"></i> <span class="category-name">Atractivos y Oferta Turística</span>', 
        '<i class="fa fa-fw fa-coffee category-icon"></i> <span class="category-name">Consumo de Servicios</span>', 
        '<i class="fa fa-fw fa-dollar category-icon"></i> <span class="category-name">Costo</span>',
        '<span class="category-name">Experiencia de Viaje</span> <i class="fa fa-fw fa-plane category-icon"></i>', 
        '<span class="category-name">Imagen</span> <i class="fa fa-fw fa-bookmark category-icon"></i>',
        '<span class="category-name">Satisfacción y Recomendación</span> <i class="fa fa-fw fa-thumbs-o-up category-icon"></i>'
    ];

    $scope.series = [{
      name: 'Promedio',
      data: [9, 8, 7, 9, 10, 8, 9]
    }];

    $scope.onLabelClick = function(eventArgs){
        console.log(eventArgs);
    };
});
