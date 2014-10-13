'use strict';

angular.module('infoturismoApp').controller('MainCtrl', function ($scope) {
    $scope.categorias = [
        '<span style="font-family: FontAwesome;">\uf1ba<span><span>Acceso al Destino e Infraestructura</span>', 
        '<span style="font-family: FontAwesome;">\uf041<span><span>Atractivos y Oferta Turística</span>', 
        '<span style="font-family: FontAwesome;">\uf0f4<span><span>Consumo de Servicios</span>', 
        '<span style="font-family: FontAwesome;">\uf155<span><span>Costo</span>',
        '<span>Experiencia de Viaje</span><span style="font-family: FontAwesome;">\uf1d8</span>', 
        '<span>Imagen</span><span style="font-family: FontAwesome;">\uf02e</span>',
        '<span>Satisfacción y Recomendación</span><span style="font-family: FontAwesome;">\uf164</span>'
    ];

    $scope.series = [{
      name: 'Promedio',
      data: [9, 8, 7, 9, 10, 8, 9]
    }];

    $scope.onLabelClick = function(e){
        console.log(e);
    };
});


