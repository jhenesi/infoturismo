'use strict';

angular.module('infoturismoApp').service('crumbs', ['labels', 'icons', 'routes', function(labels, icons, routes) {
	var addCrumb = function(crumb) {
		this.next = crumb;
		return crumb;
	};
	return {
		getGeneral: function() {
			return {
				name: labels.general,
      			href: routes.general.path,
      			icon: icons.general,
      			addCrumb: addCrumb
			};
		},

        //Crumbs Acceso al Destino e Infraestructura
		getAcceso: function() {
			return {
	    		name: labels.acceso,
	    		href: routes.acceso.path,
	    		icon: icons.acceso,
	    		addCrumb: addCrumb
    		};
    	},
        getAccesoSenalamiento: function() {
            return {
                name: labels.senalamiento,
                href: routes.acceso.senalamiento.path,
                icon: icons.pieChart,
                addCrumb: addCrumb
            };
        },
        getAccesoOpciones: function() {
            return {
                name: labels.opciones,
                href: routes.acceso.opciones.path,
                icon: '',
                addCrumb: addCrumb
            };
        },
        getAccesoCalidad: function() {
            return {
                name: labels.calidad,
                href: routes.acceso.calidad.path,
                icon: '',
                addCrumb: addCrumb
            };
        },
        getAccesoMantenimiento: function() {
            return {
                name: labels.mantenimiento,
                href: routes.acceso.mantenimiento.path,
                icon: '',
                addCrumb: addCrumb
            };
        },
        getAccesoAtencion: function() {
            return {
                name: labels.atencion,
                href: routes.acceso.atencion.path,
                icon: '',
                addCrumb: addCrumb
            };
        },

    	// Crumbs Atractivos y Oferta Turistica
    	getAtractivos: function() {
			return {
	    		name: labels.atractivos,
	    		href: routes.atractivos.path,
	    		icon: icons.atractivos,
	    		addCrumb: addCrumb
    		};
    	},
    	getAtractivosServicios: function() {
			return {
	    		name: labels.atractivosServicios,
	    		href: routes.atractivos.reactivos.atractivosServicios.path,
	    		icon: '',
	    		addCrumb: addCrumb
    		};
    	},
    	getAtractivosConcervacion: function() {
			return {
	    		name: labels.atractivosConservacion,
	    		href: routes.atractivos.reactivos.atractivosConservacion.path,
	    		icon: '',
	    		addCrumb: addCrumb
    		};
    	},
    	getAtractivosVariedad: function() {
			return {
	    		name: labels.atractivosVariedad,
	    		href: routes.atractivos.reactivos.atractivosVariedad.path,
	    		icon: '',
	    		addCrumb: addCrumb
    		};
    	},
    	getAtractivosCalidad: function() {
			return {
	    		name: labels.atractivosCalidad,
	    		href: routes.atractivos.reactivos.atractivosCalidad.path,
	    		icon: '',
	    		addCrumb: addCrumb
    		};
    	},
    	getAtractivosCulturales: function() {
			return {
	    		name: labels.atractivosCulturales,
	    		href: routes.atractivos.reactivos.atractivosCulturales.path,
	    		icon: '',
	    		addCrumb: addCrumb
    		};
    	},
    	getAtractivosNaturales: function() {
			return {
	    		name: labels.atractivosNaturales,
	    		href: routes.atractivos.reactivos.atractivosNaturales.path,
	    		icon: '',
	    		addCrumb: addCrumb
    		};
    	},

    	//Crumbs Consumo de servicios
    	getConsumo: function() {
			return {
	    		name: labels.consumo,
	    		href: routes.consumo.path,
	    		icon: icons.consumo,
	    		addCrumb: addCrumb
    		};
    	},

        getHospedaje: function() {
            return {
                name: labels.hospedaje,
                href: routes.consumo.hospedaje.path,
                icon: icons.hospedaje,
                addCrumb: addCrumb
            };
        },

        getHospedajePercepcion: function() {
            return {
                name: labels.hospedajePercepcion,
                href: '',
                icon: icons.pieChart,
                addCrumb: addCrumb
            };
        },

        /*
    	getConsumoHotel: function() {
			return {
	    		name: labels.hotel,
	    		href: routes.consumo.reactivos.hotel.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},
    	getConsumoMotel: function() {
			return {
	    		name: labels.motel,
	    		href: routes.consumo.reactivos.motel.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},
    	getConsumoCampamento: function() {
			return {
	    		name: labels.campamento,
	    		href: routes.consumo.reactivos.campamento.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},
    	getConsumoHuespedes: function() {
			return {
	    		name: labels.huespedes,
	    		href: routes.consumo.reactivos.huespedes.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},
    	getConsumoFamiliares: function() {
			return {
	    		name: labels.familiares,
	    		href: routes.consumo.reactivos.familiares.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},
    	getConsumoPropia: function() {
			return {
	    		name: labels.propia,
	    		href: routes.consumo.reactivos.propia.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},
    	getConsumoRentada: function() {
			return {
	    		name: labels.rentada,
	    		href: routes.consumo.reactivos.rentada.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},
    	getConsumoOtro: function() {
			return {
	    		name: labels.otro,
	    		href: routes.consumo.reactivos.otro.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},

		getConsumoNinguno: function() {
			return {
	    		name: labels.ninguno,
	    		href: routes.consumo.reactivos.ninguno.path,
	    		icon:'',
	    		addCrumb: addCrumb
    		}
    	},*/
    	

        //Crumbs Costo
    	getCosto: function() {
    		return {
    			name: labels.costo,
    			href: routes.costo.path,
    			icon: icons.costo,
    			addCrumb: addCrumb
    		};
    	},
    	getCostoHospedaje: function() {
    		return {
    			name: labels.costoHospedaje,
    			href: routes.costo.reactivos.hospedaje.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getCostoTransporte: function() {
    		return {
    			name: labels.costoTransporte,
    			href: routes.costo.reactivos.transporte.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getCostoAlimentos: function() {
    		return {
    			name: labels.costoAlimentos,
    			href: routes.costo.reactivos.alimentos.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getCostoExcursion: function() {
    		return {
    			name: labels.costoTransporte,
    			href: routes.costo.reactivos.excursion.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getCostoEstacionamiento: function() {
    		return {
    			name: labels.costoEstacionamiento,
    			href: routes.costo.reactivos.estacionamiento.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getExperiencia: function() {
    		return {
    			name: labels.experiencia,
    			href: routes.experiencia.path,
    			icon: icons.experiencia,
    			addCrumb: addCrumb
    		};
    	},
    	getExperienciaObregon: function() {
    		return {
    			name: labels.experienciaObregon,
    			href: routes.experiencia.reactivos.obregon.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getExperienciaHospitalidad: function() {
    		return {
    			name: labels.experienciaHospitalidad,
    			href: routes.experiencia.reactivos.hospitalidad.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getExperienciaNaturales: function() {
    		return {
    			name: labels.experienciaNaturales,
    			href: routes.experiencia.reactivos.naturales.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getExperienciaDiferente: function() {
    		return {
    			name: labels.experienciaDiferente,
    			href: routes.experiencia.reactivos.diferente.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getExperienciaDisponibilidad: function() {
    		return {
    			name: labels.experienciaDisponibilidad,
    			href: routes.experiencia.reactivos.disponibilidad.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},

		//Imagen
    	getImagen: function() {
    		return {
    			name: labels.imagen,
    			href: routes.imagen.path,
    			icon: icons.imagen,
    			addCrumb: addCrumb
    		};
    	},  	
    	getImagenPercepcion: function() {
    		return {
    			name: labels.seguridad,
    			href: routes.imagen.reactivos.percepciones.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getImagenSitios: function() {
    		return {
    			name: labels.imagenSitio,
    			href: routes.imagen.reactivos.imagenes.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getImagenAmbulantes: function() {
    		return {
    			name: labels.vendedores,
    			href: routes.imagen.reactivos.ambulantes.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getImagenTrasito: function() {
    		return {
    			name: labels.transito,
    			href: routes.imagen.reactivos.transito.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},
    	getImagenLimpieza: function() {
    		return {
    			name: labels.limpieza,
    			href: routes.imagen.reactivos.limpieza.path,
    			icon: '',
    			addCrumb: addCrumb
    		};
    	},


    	//Crumbs Satisfaccion y Recomendacion
    	getSatisfaccion: function() {
    		return {
    			name: labels.satisfaccion,
    			href: routes.satisfaccion.path,
    			icon: icons.satisfaccion,
    			addCrumb: addCrumb
    		};
    	},
        getSatisfaccionNivel: function() {
            return {
                name: labels.nivelSatisfaccion,
                href: routes.satisfaccion.reactivos.nivelSatisfaccion.path,
                icon: '',
                addCrumb: addCrumb
            };
        },
        getSatisfaccionExpectativas: function() {
            return {
                name: labels.expectativas,
                href: routes.satisfaccion.reactivos.expectativas.path,
                icon: '',
                addCrumb: addCrumb
            };
        },
        getSatisfaccionDisposicion: function() {
            return {
                name: labels.disposicion,
                href: routes.satisfaccion.reactivos.disposicion.path,
                icon: '',
                addCrumb: addCrumb
            };
        },
        getSatisfaccionRecomendacion: function() {
            return {
                name: labels.recomendacion,
                href: routes.satisfaccion.reactivos.recomendacion.path,
                icon: '',
                addCrumb: addCrumb
            };
        }
	};
}]);
