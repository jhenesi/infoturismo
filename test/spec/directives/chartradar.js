'use strict';

describe('Unit: La directiva chartRadar', function() {

  beforeEach(module('infoturismoApp'));
    var element, scope, chart, categorias, series;

    beforeEach(inject(function($rootScope, $compile) {
      element = angular.element(
        '<chart-radar categories="categorias" series="series" label-click="onLabelClick(e)"></chart-radar>'
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

    it("debe de mostrar las categorias proporcionadas en la grafica", function(){
      var labels = $(element).find('.highcharts-xaxis-labels > text').not(":last");

      categorias.map(function(categoria, i){
        expect($(labels[i]).text()).toBe(categoria);
      });
    });

    it("debe de mostrar un marcador por cada dato proporcionado", function(){
      var dataLength = 0;

      series.map(function(serie){ dataLength += serie.data.length });

      expect(chart.pointCount).toBe(dataLength);
    });

    it("debe disparar un evento al dar click en alguna categoria", function(){   
      scope.onLabelClick = function(e){};

      spyOn(scope, 'onLabelClick');

      element.find(".highcharts-axis-labels > text").click();

      expect(scope.onLabelClick).toHaveBeenCalled();
    });

    it("debe disparar un evento al dar click en la categoria del tooltip", function(){   
      scope.onLabelClick = function(e){};

      spyOn(scope, 'onLabelClick');

      element.find(".highcharts-tooltip> text").click();

      expect(scope.onLabelClick).toHaveBeenCalled();
    });
});