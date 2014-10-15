'use strict';

angular.module('infoturismoApp')
  .service('infoturismoWebApi', function infoturismoWebApi($http) {
    var root = 'http://localhost:9000';

	return {
		getOverviewData: function() {
			return $http.get(root +'/data/resumen.json');
		}
	};
  });