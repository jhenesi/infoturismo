'use strict';

angular.module('infoturismoApp').directive('chartRadar', function () {
    return {
		scope: {
			title: '@',
			categories: '=',
			series: '=',
            labelClick: '&'
		},
		restrict: 'E',
		template: '<div class="chart-container"></div>',
		replace: true,
		link: function(scope, el, attrs) {
            var chart, series, labels;

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
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, 0)'
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
                    	step: 1,
                        useHTML: true
                    }
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },

                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
                    useHTML: true
                },

                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    //y: 70,
                    layout: 'vertical'
                },

                series: series
            });
            
            labels = $(chart).find('.highcharts-xaxis-labels span');

            labels.css("cursor","pointer")
            labels.click(function(e){
                var index = $(e.currentTarget).index();

                scope.labelClick({
                    eventArgs: {
                        index: index,
                        category: chart.highcharts().options.xAxis[0].categories[index]
                    }
                });
            });
		}
	};
});
