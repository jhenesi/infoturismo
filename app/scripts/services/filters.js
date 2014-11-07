'use strict';


angular.module('infoturismoApp').service('filters', 
	function filters() {
    	return {
    		acceso: {
    			autobus: false,
    			autobusRentado: false,
    			automovilPropio: false,
    			automovilRentado: false,
    			avion: false,
    			otro: false
    		}
    	};
 	}
);
