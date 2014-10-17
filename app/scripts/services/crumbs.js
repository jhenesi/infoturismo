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
      			href: routes.general,
      			icon: icons.general,
      			addCrumb: addCrumb
			}
		},
		getAcceso: function() {
			return {
	    		name: labels.acceso,
	    		href: routes.acceso,
	    		icon: icons.acceso,
	    		addCrumb: addCrumb
    		}
    	},
    	getSatisfaccion: function() {
    		return {
	    		name: labels.satisfaccion,
	    		href: routes.satisfaccion,
	    		icon: icons.satisfaccion,
	    		addCrumb: addCrumb
    		}
    	}
	};
}]);
