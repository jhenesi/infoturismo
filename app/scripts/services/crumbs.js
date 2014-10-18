'use strict';

angular.module('infoturismoApp').service('crumbs', ['labels', 'icons', 'routes', function(labels, icons, routes) {
	var addCrumb = function(crumb) {
		this.next = crumb;
		return crumb;
	}
	return {
		getGeneral: function() {
			return {
				name: labels.general,
      			href: routes.general.path,
      			icon: icons.general,
      			addCrumb: addCrumb
			}
		},
		getAcceso: function() {
			return {
	    		name: labels.acceso,
	    		href: routes.acceso.path,
	    		icon: icons.acceso,
	    		addCrumb: addCrumb
    		}
    	},
    	getSatisfaccion: function() {
    		return {
	    		name: labels.satisfaccion,
	    		href: routes.satisfaccion.path,
	    		icon: icons.satisfaccion,
	    		addCrumb: addCrumb
    		}
    	},
    	getSenalamiento: function() {
    		return {
	    		name: labels.senalamiento,
	    		href: routes.acceso.reactivos.senalamiento.path,
	    		icon: '',
	    		addCrumb: addCrumb
    		}
    	}
	};
}]);
