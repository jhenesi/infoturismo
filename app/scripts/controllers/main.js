'use strict';

angular.module('infoturismoApp').controller('MainCtrl', ['$scope', '$window','$sce', 'infoturismoWebApi', 'labels', 'icons', 'routes', 'crumbs', function ($scope, $window, $sce, infoturismoWebApi, labels, icons, routes, crumbs) {
    var breadcrumbs = crumbs.getGeneral();

    $scope.title = labels.general;
    $scope.titleIcon = icons.general;
    $scope.navegacion = breadcrumbs;

    $scope.onLabelClick = function(e){
        if($(e.target).text() === $sce.getTrustedHtml(labels.acceso)){
            $window.location = routes.acceso.path;
        }
        if($(e.target).text() === $sce.getTrustedHtml(labels.atractivos)){
            $window.location = routes.atractivos.path;
        }
        if($(e.target).text() === $sce.getTrustedHtml(labels.costo)){
            $window.location = routes.costo.path;
        }
        if($(e.target).text() === $sce.getTrustedHtml(labels.experiencia)){
            $window.location = routes.experiencia.path;
        }
         if($(e.target).text() === $sce.getTrustedHtml(labels.imagen)){
            $window.location = routes.imagen.path;
        }
         if($(e.target).text() === $sce.getTrustedHtml(labels.satisfaccion)){
            $window.location = routes.satisfaccion.path;
        }
    };

    infoturismoWebApi.getOverviewData()
        .success(function(data, status, headers, config) {
            $scope.datos = {
                categories: [
                    '<span style="font-family: FontAwesome;">' + icons.accesoSvg + '<span><span>' + $sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)) + '</span>',
                    '<span style="font-family: FontAwesome;">' + icons.atractivosSvg + '<span><span>' + $sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)) + '</span>', 
                    '<span style="font-family: FontAwesome;">' + icons.consumoSvg + '<span><span>' + $sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)) + '</span>', 
                    '<span style="font-family: FontAwesome;">' + icons.costoSvg + '<span><span>' + $sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)) + '</span>', 
                    '<span>' + $sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre)) + '</span><span style="font-family: FontAwesome;">'+ icons.experienciaSvg + '</span>',
                    '<span>' + $sce.getTrustedHtml($sce.trustAsHtml(data[5].Nombre)) + '</span><span style="font-family: FontAwesome;">'+ icons.imagenSvg + '</span>',
                    '<span>' + $sce.getTrustedHtml($sce.trustAsHtml(data[6].Nombre)) + '</span><span style="font-family: FontAwesome;">'+ icons.satisfaccionSvg + '</span>'
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


