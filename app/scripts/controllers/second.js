'use strict';

angular.module('infoturismoApp').controller('SecondCtrl', ['$scope', '$window', '$routeParams', '$sce', 'infoturismoWebApi', 'labels', 'icons', 'routes', 'crumbs', function ($scope, $window, $routeParams, $sce, infoturismoWebApi, labels, icons, routes, crumbs) {
	var reactivoId, breadcrumbs;

	reactivoId = $routeParams.reactivoId;

	

	//Acceso al Destino e Infraestructura
	if(reactivoId === "senalamiento") {
		$scope.title = labels.senalamiento;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAcceso()).addCrumb(crumbs.getAccesoSenalamiento());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "opciones") {
		$scope.title = labels.opciones;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAcceso()).addCrumb(crumbs.getAccesoOpciones());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "calidad") {
		$scope.title = labels.calidad;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAcceso()).addCrumb(crumbs.getAccesoCalidad());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "mantenimiento") {
		$scope.title = labels.mantenimiento;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAcceso()).addCrumb(crumbs.getAccesoMantenimiento());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "atencion") {
		$scope.title = labels.atencion;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAcceso()).addCrumb(crumbs.getAccesoAtencion());

   		$scope.navegacion = breadcrumbs;
	};



	// Atractivos y oferta turistica 
	if(reactivoId === "atractivosServicios") {
		$scope.title = labels.atractivosServicios;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAtractivos()).addCrumb(crumbs.getAtractivosServicios());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "atractivosConservacion") {
		$scope.title = labels.atractivosConservacion;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAtractivos()).addCrumb(crumbs.getAtractivosConcervacion());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "atractivosVariedad") {
		$scope.title = labels.atractivosVariedad;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAtractivos()).addCrumb(crumbs.getAtractivosVariedad());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "atractivosCalidad") {
		$scope.title = labels.atractivosCalidad;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAtractivos()).addCrumb(crumbs.getAtractivosCalidad());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "atractivosCulturales") {
		$scope.title = labels.atractivosCulturales;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAtractivos()).addCrumb(crumbs.getAtractivosCulturales());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "atractivosNaturales") {
		$scope.title = labels.atractivosNaturales;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getAtractivos()).addCrumb(crumbs.getAtractivosNaturales());

   		$scope.navegacion = breadcrumbs;
	};

	//Consumo de Servicios
	if(reactivoId === "hotel") {
		$scope.title = labels.hotel;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoHotel());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "motel") {
		$scope.title = labels.motel;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoMotel());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "campamento") {
		$scope.title = labels.campamento;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoCampamento());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "huespedes") {
		$scope.title = labels.huespedes;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoHuespedes());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "familiares") {
		$scope.title = labels.familiares;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoFamiliares());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "propia") {
		$scope.title = labels.propia;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoPropia());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "rentada") {
		$scope.title = labels.rentada;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoRentada());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "otro") {
		$scope.title = labels.otro;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoOtro());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "ninguno") {
		$scope.title = labels.ninguno;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getConsumo()).addCrumb(crumbs.getConsumoNinguno());

   		$scope.navegacion = breadcrumbs;
	};
	


	//Costo
	if(reactivoId === "hospedaje") {
		$scope.title = labels.costoHospedaje;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getCosto()).addCrumb(crumbs.getCostoHospedaje());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "transporte") {
		$scope.title = labels.costoTransporte;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getCosto()).addCrumb(crumbs.getCostoTransporte());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "alimentos") {
		$scope.title = labels.costoAlimentos;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getCosto()).addCrumb(crumbs.getCostoAlimentos());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "excursion") {
		$scope.title = labels.costoExcursion;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getCosto()).addCrumb(crumbs.getCostoExcursion());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "estacionamiento") {
		$scope.title = labels.costoEstacionamiento;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getCosto()).addCrumb(crumbs.getCostoEstacionamiento());

   		$scope.navegacion = breadcrumbs;
	};

	// Experiencia de viaje
	if(reactivoId === "obregon") {
		$scope.title = labels.experienciaObregon;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getExperiencia()).addCrumb(crumbs.getExperienciaObregon());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "hospitalidad") {
		$scope.title = labels.experienciaHospitalidad;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getExperiencia()).addCrumb(crumbs.getExperienciaHospitalidad());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "naturales") {
		$scope.title = labels.experienciaNaturales;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getExperiencia()).addCrumb(crumbs.getExperienciaNaturales());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "diferente") {
		$scope.title = labels.experienciaDiferente;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getExperiencia()).addCrumb(crumbs.getExperienciaDiferente());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "disponibilidad") {
		$scope.title = labels.experienciaDisponibilidad;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getExperiencia()).addCrumb(crumbs.getExperienciaDisponibilidad());

   		$scope.navegacion = breadcrumbs;
	};

	// Imagen
	if(reactivoId === "percepcion") {
		$scope.title = labels.seguridad;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getImagen()).addCrumb(crumbs.getImagenPercepcion());

   		$scope.navegacion = breadcrumbs;
	};

	if(reactivoId === "sitios") {
		$scope.title = labels.imagenSitio;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getImagen()).addCrumb(crumbs.getImagenSitios());

   		$scope.navegacion = breadcrumbs;
	};


	if(reactivoId === "ambulantes") {
		$scope.title = labels.vendedores;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getImagen()).addCrumb(crumbs.getImagenAmbulantes());

   		$scope.navegacion = breadcrumbs;
	};

	if(reactivoId === "transito") {
		$scope.title = labels.transito;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getImagen()).addCrumb(crumbs.getImagenTrasito());

   		$scope.navegacion = breadcrumbs;
	};
	
	if(reactivoId === "limpieza") {
		$scope.title = labels.limpieza;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getImagen()).addCrumb(crumbs.getImagenLimpieza());

   		$scope.navegacion = breadcrumbs;
	};

	//Satisfacción y Recomendación
	if(reactivoId === "nivel") {
		$scope.title = labels.nivelSatisfaccion;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getSatisfaccion()).addCrumb(crumbs.getSatisfaccionNivel());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "expectativas") {
		$scope.title = labels.expectativas;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getSatisfaccion()).addCrumb(crumbs.getSatisfaccionExpectativas());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "disposicion") {
		$scope.title = labels.disposicion;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getSatisfaccion()).addCrumb(crumbs.getSatisfaccionDisposicion());

   		$scope.navegacion = breadcrumbs;
	};
	if(reactivoId === "recomendacion") {
		$scope.title = labels.recomendacion;
		$scope.titleIcon = '';

		breadcrumbs = crumbs.getGeneral();
   		breadcrumbs.addCrumb(crumbs.getSatisfaccion()).addCrumb(crumbs.getSatisfaccionRecomendacion());

   		$scope.navegacion = breadcrumbs;
	};


}]);
