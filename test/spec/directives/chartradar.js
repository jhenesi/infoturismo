'use strict';
 
describe('Unit: La directiva chartRadar', function() {
  beforeEach(module('infoturismoApp'));

  var element, scope, chart, categorias, series;

  beforeEach(inject(function($rootScope, $compile) {
      element = angular.element(
        '<chart-radar id="chart" title="Budget vs spending" categories="categorias" series="series" label-click="onLabelClick(eventArgs)"></chart-radar>'
      );
 
      scope = $rootScope.$new();

      categorias = [
        'Sales', 
        'Marketing', 
        'Development', 
        'Customer Support',
        'Information Technology', 
        'Administration'
      ];

      scope.categorias = categorias;

      series = [{
          name: 'Allocated Budget',
          data: [43000, 19000, 60000, 35000, 17000, 10000]
      }, {
          name: 'Actual Spending',
          data: [50000, 39000, 42000, 31000, 26000, 14000]
      }];

      scope.series = series;
 
      element = $compile(element)(scope);
      scope.$apply();

      chart = element.highcharts();
    }));

    it("debe de mostrar el titulo proporcionado", function(){
      expect($(element).find('.highcharts-title').text()).toBe("Budget vs spending");
    });

    it("debe de mostrar las categorias proporcionadas en la grafica", function(){
      var labels = $(element).find('.highcharts-xaxis-labels span').not(":last");

      categorias.map(function(categoria, i){
        expect($(labels[i]).text()).toBe(categoria);
      });
    });

    it("debe de mostrar un marcador por cada dato proporcionado", function(){
      var markers, dataLength;

      markers = $(element).find(".highcharts-series-group .highcharts-markers path");
      dataLength = 0;

      series.map(function(serie){ dataLength += serie.data.length });

      expect(markers.length).toBe(dataLength);
    });

    it("debe de mostrar una leyenda por cada serie de datos proporcionada", function(){
      var legends = $(element).find('.highcharts-legend-item text');

      series.map(function(serie, i){
        expect($(legends[i]).text()).toBe(serie.name);
      });
    })

    it("debe de exponer un evento click y proporcionar como argumento un objeto con el indice y el nombre de la categoria seleccionada", function(){   
      scope.onLabelClick = function(eventArgs){};

      spyOn(scope, 'onLabelClick');

      element.find(".highcharts-container .label-pointer").click();

      categorias.map(function(categoria, i){
        expect(scope.onLabelClick).toHaveBeenCalledWith({
          index: i,
          category: categoria
        });
      });
    });
});