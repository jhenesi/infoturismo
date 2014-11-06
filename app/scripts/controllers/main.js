'use strict';

angular.module('infoturismoApp').controller('MainCtrl', [
    '$scope', 
    '$window',
    '$sce', 
    'infoturismoWebApi', 
    'labels', 
    'icons', 
    'routes', 
    'crumbs', 
    function (
        $scope, 
        $window, 
        $sce, 
        infoturismoWebApi, 
        labels, 
        icons, 
        routes, 
        crumbs
    ) {
        var breadcrumbs = crumbs.getGeneral(),
            rutas = {};

        $scope.title = labels.general;
        $scope.titleIcon = icons.general;

        $scope.navegacion = breadcrumbs;

        rutas['Acceso al Destino e Infraestructura'] = routes.acceso.path;
        rutas['Atractivos y Oferta Turística'] = routes.atractivos.path;
        rutas['Consumo de Servicios'] = routes.consumo.path;
        rutas['Costo'] = routes.costo.path;
        rutas['Experiencia de Viaje'] = routes.experiencia.path;
        rutas['Imagen'] = routes.imagen.path;
        rutas['Satisfacción y Recomendación'] = routes.satisfaccion.path;

        $scope.onLabelClick = function(e){
            $window.location = rutas[angular.element(e.target).text()]
        };

        infoturismoWebApi.getOverviewData()
            .success(function(data, status, headers, config) {
               var values = [];

                angular.forEach(data, function(item, i) {
                    values.push(item.Promedio)
                });

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
                        data: values
                    }]
                };
            })
            .error(function(data, status, headers, config) {
            });
    }
]);


