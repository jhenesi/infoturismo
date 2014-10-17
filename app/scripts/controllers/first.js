'use strict';

angular.module('infoturismoApp').controller('FirstCtrl', ['$scope', '$routeParams', 'labels', 'icons', 'crumbs', function ($scope, $routeParams, labels, icons, crumbs) {
    var sectionId, breadcrumbs;

    sectionId = $routeParams.sectionId;

    if(sectionId === "acceso"){
    	$scope.title = labels.acceso;
    	$scope.titleIcon = icons.acceso;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getAcceso());

    	$scope.navegacion = breadcrumbs;
    }
}]);
