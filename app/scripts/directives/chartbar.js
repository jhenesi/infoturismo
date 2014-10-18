'use strict';

angular.module('infoturismoApp').directive('chartBar', function () {
    return {
    	restrict: 'E',
     	template: '<div class="chart-container"></div>',
      	replace: true,
      	link: function postLink(scope, element, attrs) {
       		console.log(element[0])
       		element.highcharts({
        		chart: {
                	type: 'bar'
            	},
            	exporting: { enabled: false },
            	title: {
                	text: ''
            	},
            	xAxis: {
	                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
	                title: {
	                    text: null
	                },
	                labels : {
	                    enabled: false
	                }
            	},
            	yAxis: {
	                stackLabels: {
	                    formatter: function() {
	                        return this.axis.chart.xAxis[0].categories[this.x];
	                    },
	                    enabled: true,           
	                    verticalAlign: 'top',     
	                    align: 'left',
	                    y: -5
	                },
                	min: 0,
                	max: 10,
                	tickInterval: 2,
	                title: {
	                    text: 'Promedio',
	                    align: 'high'
	                },
	                labels: {
	                    overflow: 'justify'
	                }
            	},
	            tooltip: {
	                formatter: function () {
                 		return this.x + '</b>: <b>' + this.y + '</b>';
                  	}
	            },
	            plotOptions: {
	                bar: {
	                    stacking: 'normal'
	                }
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'top',
	                x: -40,
	                y: 100,
	                floating: true,
	                borderWidth: 1,
	                backgroundColor: '#FFFFFF',
	                shadow: true
	            },
	            credits: {
	                enabled: false
	            },
		        series: [{
		            name: 'Year 1800',
		            data: [6, 7, 3, 9, 2],
		            showInLegend: false
		        }]
		    });
      	}
    };
});
