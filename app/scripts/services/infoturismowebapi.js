'use strict';

angular.module('infoturismoApp').service('infoturismoWebApi', ['$http', function infoturismoWebApi($http) {
    var root = 'http://localhost:9000';

	return {
		getOverviewData: function() {
			return $http.get(root +'/data/resumen.json');
		},
		getAccesoOverviewData: function(){
			return $http.get(root +'/data/acceso.json');
		},
		getAtractivosOverviewData: function(){
			return $http.get(root +'/data/atractivos.json');
		},
		getCostoOverviewData: function() {
			return $http.get(root +'/data/costo.json');
		},
		getExperienciaOverviewData: function() {
			return $http.get(root +'/data/experiencia.json');
		},
		getImagenOverviewData: function() {
			return $http.get(root +'/data/imagen.json');
		},
		getSatisfaccionOverviewData: function() {
			return $http.get(root +'/data/satisfaccion.json');
		},
		getConsumoOverviewData: function() {
			return $http.get(root +'/data/consumo-resumen.json');
		},
		getHospedajeOverviewData: function() {
			return $http.get(root +'/data/hospedaje.json');
		},
		getHospedajePercepcionOverviewData: function() {
			return $http.get(root +'/data/hospedaje-percepcion.json');
		},
		getSenalamientoOverviewData: function() {
			return $http.get(root +'/data/senalamiento.json');
		}
	};
}]);
