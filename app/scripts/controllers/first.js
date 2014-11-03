'use strict';

angular.module('infoturismoApp').controller('FirstCtrl', ['$scope', '$window', '$routeParams', '$sce', 'infoturismoWebApi', 'labels', 'icons', 'routes', 'crumbs', function ($scope, $window, $routeParams, $sce, infoturismoWebApi, labels, icons, routes, crumbs) {
    var sectionId, breadcrumbs;

    sectionId = $routeParams.sectionId;

    //Acceso al Destino e infraestructura
    if(sectionId === "acceso") {
    	$scope.title = labels.acceso;
    	$scope.titleIcon = icons.acceso;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getAcceso());

    	$scope.navegacion = breadcrumbs;

    	$scope.onLabelClick = function(e){
        	if($(e.target).text() === $scope.datos.categories[0]) {
        		$window.location = routes.acceso.reactivos.senalamiento.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[1]) {
        		$window.location = routes.acceso.reactivos.opciones.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[2]) {
        		$window.location = routes.acceso.reactivos.calidad.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[3]) {
        		$window.location = routes.acceso.reactivos.mantenimiento.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[4]) {
        		$window.location = routes.acceso.reactivos.atencion.path;
        	}
    	};

		infoturismoWebApi.getAccesoOverviewData()
	        .success(function(data, status, headers, config) {
	        	var categories, values;

	        	values = data.map(function(item) {
	        		return item.Promedio;
	        	});

	            $scope.datos = {
	                categories: [
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre))
	        		],
	                series: [{
	                    name: 'Promedio',
	                    data: [
							data[0].Promedio,
							data[1].Promedio,
							data[2].Promedio,
							data[3].Promedio,
							data[4].Promedio,
	                    ]
	                }]
	            };
	        })
	        .error(function(data, status, headers, config) {
	        });
    }

    // Atractivos y Oferta turistica
    if(sectionId === "atractivos") {
    	$scope.title = labels.atractivos;
    	$scope.titleIcon = icons.atractivos;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getAtractivos());

    	$scope.navegacion = breadcrumbs;

    	$scope.onLabelClick = function(e){
        	if($(e.target).text() === $scope.datos.categories[0]) {
        		$window.location = routes.atractivos.reactivos.atractivosServicios.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[1]) {
        		$window.location = routes.atractivos.reactivos.atractivosConservacion.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[2]) {
        		$window.location = routes.atractivos.reactivos.atractivosVariedad.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[3]) {
        		$window.location = routes.atractivos.reactivos.atractivosCalidad.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[4]) {
        		$window.location = routes.atractivos.reactivos.atractivosCulturales.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[5]) {
        		$window.location = routes.atractivos.reactivos.atractivosNaturales.path;
        	}
        
        	
        	
        	
    	};

		infoturismoWebApi.getAtractivosOverviewData()
	        .success(function(data, status, headers, config) {
	        	var categories, values;

	        	values = data.map(function(item) {
	        		return item.Promedio;
	        	});

	            $scope.datos = {
	                categories: [
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[5].Nombre))
	                	
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
	                    ]
	                }]
	            };
	        })
	        .error(function(data, status, headers, config) {
	        });
    }

    // Consumo de servicios 
    if(sectionId === "consumo") {
    	$scope.title = labels.consumo;
    	$scope.titleIcon = icons.consumo;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getConsumo());

    	$scope.navegacion = breadcrumbs;

    	$scope.onLabelClick = function(e){
        	if($(e.target).text() === $scope.datos.categories[0]) {
        		$window.location = routes.consumo.reactivos.hotel.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[1]) {
        		$window.location = routes.consumo.reactivos.motel.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[2]) {
        		$window.location = routes.consumo.reactivos.campamento.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[3]) {
        		$window.location = routes.consumo.reactivos.huespedes.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[4]) {
        		$window.location = routes.consumo.reactivos.familiares.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[5]) {
        		$window.location = routes.consumo.reactivos.propia.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[6]) {
        		$window.location = routes.consumo.reactivos.rentada.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[7]) {
        		$window.location = routes.consumo.reactivos.otro.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[8]) {
        		$window.location = routes.consumo.reactivos.ninguno.path;
        	}
    	};

		infoturismoWebApi.getConsumoOverviewData()
	        .success(function(data, status, headers, config) {
	        	var categories, values;

	        	values = data.map(function(item) {
	        		return item.Promedio;
	        	});

	            $scope.datos = {
	                categories: [
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[5].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[6].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[7].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[8].Nombre))
	                	
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
							data[6].Promedio,
							data[7].Promedio,
							data[8].Promedio,
							
	                    ]
	                }]
	            };
	        })
	        .error(function(data, status, headers, config) {
	        });
    };

     //Costo
     if(sectionId === "costo") {
    	$scope.title = labels.costo;
    	$scope.titleIcon = icons.costo;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getCosto());

    	$scope.navegacion = breadcrumbs;

    	$scope.onLabelClick = function(e){
        	if($(e.target).text() === $scope.datos.categories[0]) {
        		$window.location = routes.costo.reactivos.hospedaje.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[1]) {
        		$window.location = routes.costo.reactivos.transporte.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[2]) {
        		$window.location = routes.costo.reactivos.alimentos.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[3]) {
        		$window.location = routes.costo.reactivos.excursion.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[4]) {
        		$window.location = routes.costo.reactivos.estacionamiento.path;
        	}
    	};

		infoturismoWebApi.getCostoOverviewData()
	        .success(function(data, status, headers, config) {
	        	var categories, values;

	        	values = data.map(function(item) {
	        		return item.Promedio;
	        	});

	            $scope.datos = {
	                categories: [
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre))
	        		],
	                series: [{
	                    name: 'Calificacion',
	                    data: [
							data[0].Promedio,
							data[1].Promedio,
							data[2].Promedio,
							data[3].Promedio,
							data[4].Promedio
	                    ]
	                }]
	            };
	        })
	        .error(function(data, status, headers, config) {
	        });
    };
     
	 //Experiencia de Viaje
     if(sectionId === "experiencia") {
    	$scope.title = labels.experiencia;
    	$scope.titleIcon = icons.experiencia;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getExperiencia());

    	$scope.navegacion = breadcrumbs;

    	$scope.onLabelClick = function(e){
        	if($(e.target).text() === $scope.datos.categories[0]) {
        		$window.location = routes.experiencia.reactivos.obregon.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[1]) {
        		$window.location = routes.experiencia.reactivos.hospitalidad.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[2]) {
        		$window.location = routes.experiencia.reactivos.naturales.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[3]) {
        		$window.location = routes.experiencia.reactivos.diferente.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[4]) {
        		$window.location = routes.experiencia.reactivos.disponibilidad.path;
        	}
    	};

		infoturismoWebApi.getExperienciaOverviewData()
	        .success(function(data, status, headers, config) {
	        	var categories, values;

	        	values = data.map(function(item) {
	        		return item.Promedio;
	        	});

	            $scope.datos = {
	                categories: [
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre))
	        		],
	                series: [{
	                    name: 'Promedio',
	                    data: [
							data[0].Promedio,
							data[1].Promedio,
							data[2].Promedio,
							data[3].Promedio,
							data[4].Promedio
	                    ]
	                }]
	            };
	        })
	        .error(function(data, status, headers, config) {
	        });
    };


     //Imagen
     if(sectionId === "imagen") {
    	$scope.title = labels.imagen;
    	$scope.titleIcon = icons.imagen;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getImagen());

    	$scope.navegacion = breadcrumbs;

    	$scope.onLabelClick = function(e){
        	if($(e.target).text() === $scope.datos.categories[0]) {
        		$window.location = routes.imagen.reactivos.percepciones.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[1]) {
        		$window.location = routes.imagen.reactivos.imagenes.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[2]) {
        		$window.location = routes.imagen.reactivos.ambulantes.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[3]) {
        		$window.location = routes.imagen.reactivos.transito.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[4]) {
        		$window.location = routes.imagen.reactivos.limpieza.path;
        	}
    	};

		infoturismoWebApi.getImagenOverviewData()
	        .success(function(data, status, headers, config) {
	        	var categories, values;

	        	values = data.map(function(item) {
	        		return item.Promedio;
	        	});

	            $scope.datos = {
	                categories: [
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[4].Nombre))
	        		],
	                series: [{
	                    name: 'Promedio',
	                    data: [
							data[0].Promedio,
							data[1].Promedio,
							data[2].Promedio,
							data[3].Promedio,
							data[4].Promedio
	                    ]
	                }]
	            };
	        })
	        .error(function(data, status, headers, config) {
	        });
    };

    //Satisfaccion y Recomendacion
    if(sectionId === "satisfaccion") {
    	$scope.title = labels.satisfaccion;
    	$scope.titleIcon = icons.satisfaccion;

        breadcrumbs = crumbs.getGeneral();
        breadcrumbs.addCrumb(crumbs.getSatisfaccion());

    	$scope.navegacion = breadcrumbs;

    	$scope.onLabelClick = function(e){
        	if($(e.target).text() === $scope.datos.categories[0]) {
        		$window.location = routes.satisfaccion.reactivos.nivelSatisfaccion.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[1]) {
        		$window.location = routes.satisfaccion.reactivos.expectativas.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[2]) {
        		$window.location = routes.satisfaccion.reactivos.disposicion.path;
        	}
        	if($(e.target).text() === $scope.datos.categories[3]) {
        		$window.location = routes.satisfaccion.reactivos.recomendacion.path;
        	}
        	
    	};

		infoturismoWebApi.getSatisfaccionOverviewData()
	        .success(function(data, status, headers, config) {
	        	var categories, values;

	        	values = data.map(function(item) {
	        		return item.Promedio;
	        	});

	            $scope.datos = {
	                categories: [
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[0].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[1].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[2].Nombre)),
	                	$sce.getTrustedHtml($sce.trustAsHtml(data[3].Nombre)),
	                	
	        		],
	                series: [{
	                    name: 'Promedio',
	                    data: [
							data[0].Promedio,
							data[1].Promedio,
							data[2].Promedio,
							data[3].Promedio,
							
	                    ]
	                }]
	            };
	        })
	        .error(function(data, status, headers, config) {
	        });
    };


}]);
