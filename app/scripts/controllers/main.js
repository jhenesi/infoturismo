'use strict';

angular.module('infoturismoApp').controller('MainCtrl', ['$scope', '$window', 'infoturismoWebApi', 'labels', 'icons', 'routes', 'crumbs', function ($scope, $window, infoturismoWebApi, labels, icons, routes, crumbs) {
    $scope.title = labels.general;
    $scope.titleIcon = icons.general;

    var breadcrumbs = crumbs.getGeneral();

    $scope.navegacion = breadcrumbs;

    $scope.onLabelClick = function(e){
        $window.location = routes.acceso;
    };

    infoturismoWebApi.getOverviewData()
        .success(function(data, status, headers, config) {
            $scope.datos = {
                categories: [
                    '<span style="font-family: FontAwesome;">\uf1ba<span><span>Acceso al Destino e Infraestructura</span>', 
                    '<span style="font-family: FontAwesome;">\uf041<span><span>Atractivos y Oferta Turística</span>', 
                    '<span style="font-family: FontAwesome;">\uf0f4<span><span>Consumo de Servicios</span>', 
                    '<span style="font-family: FontAwesome;">\uf155<span><span>Costo</span>',
                    '<span>Experiencia de Viaje</span><span style="font-family: FontAwesome;">\uf1d8</span>', 
                    '<span>Imagen</span><span style="font-family: FontAwesome;">\uf02e</span>',
                    '<span>Satisfacción y Recomendación</span><span style="font-family: FontAwesome;">\uf164</span>'
                ],
                series: [{
                    name: 'Promedio',
                    data: [
                        data[0].Promedio,
                        data[1].Promedio,
                        data[2].Promedio,
                        data[3].Promedio,
                        data[4].Promedio,
                        data[5].Promedio,
                        data[6].Promedio
                    ]
                }]
            };
        })
        .error(function(data, status, headers, config) {
        });
}]);


