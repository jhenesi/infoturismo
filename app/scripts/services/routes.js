'use strict';

angular.module('infoturismoApp').constant('routes', {
		general: {
			path: "#/",
		},

		//rutas Acceso al destino e infraestructura
		acceso: {
			path: "#/acceso",
		  	reactivos: {
		  		senalamiento: {
		          path: "#/acceso/senalamiento"
		        },
		        opciones: {
		          path: "#/acceso/opciones"
		        },
		        calidad: {
		          path: "#/acceso/calidad"
		        },
		        mantenimiento: {
		          path: "#/acceso/mantenimiento"
		        },
		        atencion: {
		          path: "#/acceso/atencion"
		        }
			}
		},

		//rutas Atractivos y oferta turistica
		atractivos: {
			path: "#/atractivos",
		  	reactivos: {
		  		atractivosServicios: {
		          path: "#/atractivos/atractivosServicios"
		        },
		        atractivosConservacion: {
		          path: "#/atractivos/atractivosConservacion"
		        },
		        atractivosVariedad: {
		          path: "#/atractivos/atractivosVariedad"
		        },
		        atractivosCalidad: {
		          path: "#/atractivos/atractivosCalidad"
		        },
		        atractivosCulturales: {
		          path: "#/atractivos/atractivosCulturales"
		        },
		        atractivosNaturales: {
		          path: "#/atractivos/atractivosNaturales"
		        }
			}
		},

		//rutas Costos
		costo: {
			path: "#/costo",
			reactivos: {
				hospedaje: {
					path: "#/costo/hospedaje"
				},
				transporte: {
					path: "#/costo/transporte"
				},
				alimentos: {
					path: "#/costo/alimentos"
				},
				excursion: {
					path: "#/costo/excursion"
				},
				estacionamiento: {
					path: "#/costo/estacionamiento"
				}
			}
		},

		//rutas Consumo de servicios
		consumo: {
			path: "#/consumo",
		  	reactivos: {
		  		hotel: {
					path: "#/consumo/hotel"
				},
				motel: {
					path: "#/consumo/motel"
				},
				campamento: {
					path: "#/consumo/campamento"
				},
				huespedes: {
					path: "#/consumo/huespedes"
				},
				familiares: {
					path: "#/consumo/familiares"
				},
				propia: {
					path: "#/consumo/propia"
				},
				rentada: {
					path: "#/consumo/rentada"
				},
				otro: {
					path: "#/consumo/otro"
				},
				ninguno: {
					path: "#/consumo/ninguno"
				}
			}
		},


		experiencia: {
			path: "#/experiencia",
			reactivos: {
				obregon: {
					path: "#/experiencia/obregon"
				},
				hospitalidad: {
					path: "#/experiencia/hospitalidad"
				},
				naturales: {
					path: "#/experiencia/naturales"
				},
				diferente: {
					path: "#/experiencia/diferente"
				},
				disponibilidad: {
					path: "#/experiencia/disponibilidad"
				}
			}
		},

		imagen: {
			path: "#/imagen",
     		reactivos: {
     			percepciones:{
     				path: "#/imagen/percepcion"
     			},
     			imagenes:{
     				path: "#/imagen/sitios"
     			},
     			ambulantes:{
     				path: "#/imagen/ambulantes"
     			},
     			transito:{
     				path: "#/imagen/transito"
     			},
     			limpieza:{
     				path: "#/imagen/limpieza"
     			}
     		}
		},


		satisfaccion: {
			path: "#/satisfaccion",
     		reactivos: {
     			nivelSatisfaccion:{
     				path: "#/satisfaccion/nivel"
     			},
     			expectativas:{
     				path: "#/satisfaccion/expectativas"
     			},
     			disposicion:{
     				path: "#/satisfaccion/disposicion"
     			},
     			recomendacion:{
     				path: "#/satisfaccion/recomendacion"
     			}
     		}
		}
	

});
