'use strict';

angular.module('infoturismoApp').service('labels',["$sce", function($sce) {
	return {
		
	 	
	 	//Labels vista General
	 	general: $sce.trustAsHtml("Observatorio"),
	 	
	 	//Labels Acceso al destino e infraestructura
	 	acceso: $sce.trustAsHtml("Acceso al Destino e Infraestructura"),
	 	senalamiento: $sce.trustAsHtml("Se&ntilde;alamiento"),
	 	opciones: $sce.trustAsHtml("Opciones"),
	 	calidad: $sce.trustAsHtml("Calidad"),
	 	mantenimiento: $sce.trustAsHtml("Matenimiento"),
	 	atencion: $sce.trustAsHtml("Atenci&oacute;n"),

	 	//Labels Atractivos y oferta turistica
	 	atractivos: $sce.trustAsHtml("Atractivos y Oferta Tur&iacute;stica"),
	 	atractivosServicios: $sce.trustAsHtml("Atractivos y Servicios"),
	 	atractivosConservacion: $sce.trustAsHtml("Conservacion de los atractivos"),
	 	atractivosVariedad: $sce.trustAsHtml("Variedad de los atractivos"),
	 	atractivosCalidad: $sce.trustAsHtml("Calidad de los atractivos"),
	 	atractivosCulturales: $sce.trustAsHtml("Conservacion de atractivos culturales"),
	 	atractivosNaturales: $sce.trustAsHtml("Conservacion de atractivos naturales"),

	 	//Labels Consumo
	 	consumo: $sce.trustAsHtml("Consumo de Servicios"),
	 	hospedaje: $sce.trustAsHtml("Hospedaje"),
	 	/*hotel: $sce.trustAsHtml("Hotel"),
	 	motel: $sce.trustAsHtml("Motel"),
	 	campamento: $sce.trustAsHtml("Campamento/Tienda de campaña"),
	 	huespedes: $sce.trustAsHtml("Casa de huespedes"),
	 	familiares: $sce.trustAsHtml("Casa de familiares y amigos"),
	 	propia: $sce.trustAsHtml("Vivienda propia"),
	 	rentada: $sce.trustAsHtml("Vivienda rentada"),
	 	otro: $sce.trustAsHtml("Otro"),
	 	ninguno: $sce.trustAsHtml("Ninguno"),*/

	 	//Labels Costo
	 	costo: $sce.trustAsHtml("Costo"),
	 	costoHospedaje: $sce.trustAsHtml("Costo por servicio de hospedaje"),
	 	costoTransporte: $sce.trustAsHtml("Costo por servicio de transportacion"),
	 	costoAlimentos: $sce.trustAsHtml("Costo por servicio de alimentos y bebidas"),
	 	costoExcursion: $sce.trustAsHtml("Costo por servicio de excursion/turistico."),
	 	costoEstacionamiento: $sce.trustAsHtml("Costo por servicio de estacionamiento"),
	 	
	 	//Labels Experiencia de viaje
	 	experiencia: $sce.trustAsHtml("Experiencia de Viaje"),
	 	experienciaObregon: $sce.trustAsHtml("Experiencia de viaje a Cd. Obregon."),
	 	experienciaHospitalidad: $sce.trustAsHtml("Hospitalidad de los residentes que no trabajan en la industria."),
 		experienciaNaturales: $sce.trustAsHtml("Visitar los sitios naturales/culturales."),
 		experienciaDiferente: $sce.trustAsHtml("Ofrece una experiencia diferente."),
 		experienciaDisponibilidad: $sce.trustAsHtml("Disponibilidad de informacion turistica."),
 		
 		//Labels Imagen
 		imagen: $sce.trustAsHtml("Imagen"),
 		seguridad: $sce.trustAsHtml("Percepcion de seguridad"),
 		imagenSitio: $sce.trustAsHtml("Imagen de los sitios naturales o culturales"),
 		vendedores: $sce.trustAsHtml("Vendedores ambulantes"),
 		transito: $sce.trustAsHtml("Transito vehicular"),
 		limpieza: $sce.trustAsHtml("Limpieza de calles y areas publicas"),

 		//Labels Satisfacción y recomendacion
 		satisfaccion: $sce.trustAsHtml("Satisfacci&oacute;n y Recomendaci&oacute;n"),
 		nivelSatisfaccion: $sce.trustAsHtml("Nivel de satisfaccion"),
 		expectativas: $sce.trustAsHtml("Cumplimiento de expectativas"),
 		disposicion: $sce.trustAsHtml("Disposicion de Visitarnos nuevamente"),
 		recomendacion: $sce.trustAsHtml("Recomendaria visitarnos"),
        
 		//Labels logo y cerrar sesión
		marca: "Infoturismo",
		cerrarSesion: $sce.trustAsHtml("Cerrar Sesi&oacute;n"),
 	}
}]);
