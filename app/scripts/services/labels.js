'use strict';

angular.module('infoturismoApp').service('labels',["$sce", function($sce) {
	return {
		marca: "Infoturismo",
		cerrarSesion: $sce.trustAsHtml("Cerrar Sesi&oacute;n"),
	 	general: $sce.trustAsHtml("Vista General"),
	 	acceso: $sce.trustAsHtml("Acceso al Destino e Infraestructura"),
	 	atractivos: $sce.trustAsHtml("Atractivos y Oferta Tur&iacute;stica"),
	 	consumo: $sce.trustAsHtml("Consumo de Servicios"),
	 	costo: $sce.trustAsHtml("Costo"),
	 	experiencia: $sce.trustAsHtml("Experiencia de Viaje"),
	 	imagen: $sce.trustAsHtml("Imagen"),
	 	satisfaccion: $sce.trustAsHtml("Satisfacci&oacute;n y Recomendaci&oacute;n"),
	 	senalamiento: $sce.trustAsHtml("Se&ntilde;alamiento"),
 	}
}]);
