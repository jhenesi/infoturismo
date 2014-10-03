'use strict';

angular.module('infoturismoApp').directive('chartRadar', function () {
    return {
		scope: {
			title: '@',
			categories: '=',
			series: '='
		},
		restrict: 'E',
		template: '<div class="chart-container"></div>',
		replace: true,
		link: function(scope, el, attrs) {
            var chart, series;

			series = scope.series.map(function(item) {
				return {
					name: item.name,
					data: item.data,
					pointPlacement: 'on'
				}
			});

			chart = el.highcharts({
                chart: {
                    polar: true,
                    type: 'line'
                },

                title: {
                    text: scope.title,
                    x: -80
                },

                pane: {
                    size: '80%'
                },

                xAxis: {
                    categories: scope.categories,
                    tickmarkPlacement: 'on',
                    lineWidth: 0,
                    labels: {
                    	step: 1
                    }
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },

                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
                },

                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: 70,
                    layout: 'vertical'
                },

                series: series
            });
		}
	};
});
