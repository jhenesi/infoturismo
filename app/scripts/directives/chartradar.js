'use strict';

angular.module('infoturismoApp').directive('chartRadar', function () {
    return {
        scope: {
            categories: '=',
            series: '=',
            labelClick: '&'
        },
        restrict: 'E',
        template: '<div class="chart-container"></div>',
        replace: true,
        link: function(scope, el, attrs) {
            var chart, series, tooltipPosition, labels, tooltipLabel;

            series = scope.series.map(function(item) {
                return {
                    name: item.name,
                    data: item.data,
                    pointPlacement: 'on',
                    showInLegend: false
                }
            });

            chart = el.highcharts({
                chart: {
                    polar: true,
                    type: 'line'
                },

                exporting: { enabled: false },

                title: {
                    text: '',
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
                        distance: 25
                    }
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0,
                    max: 10,
                    showLastLabel: true,
                    tickInterval: 2
                },

                tooltip: {
                    formatter: function () {
                        return this.x + '</b>: <b>' + this.y + '</b>';
                    }
                },

                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'vertical'
                },

                series: series
            });

            labels = $(chart).find(".highcharts-axis-labels > text");
            tooltipLabel = $(chart).find(".highcharts-tooltip> text");

            labels.css("cursor", "pointer");
            tooltipLabel.css("cursor", "pointer");

            labels.click(function(e) {
                scope.labelClick({
                    e: e
                });
            });

            tooltipLabel.click(function(e) {
                scope.labelClick({
                    e: e
                });
            });
        }
    };
});

