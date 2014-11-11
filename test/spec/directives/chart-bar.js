'use strict';

describe('Unit: La directiva chartbar', function () {

  // load the directive's module
  beforeEach(module('infoturismoApp'));

  var element, scope, chart, labels, tooltipLabel;

  beforeEach(inject(function ($rootScope, $compile) {
    element = angular.element(
        '<chart-bar data="datos" label-click="onLabelClick(e)"></chart-radar>'
      );

    scope = $rootScope.$new();

    scope.datos = {
      categories: [
        'Sales', 
        'Marketing', 
        'Development', 
        'Customer Support',
        'Information Technology', 
        'Administration'
      ],
      series: [{
        name: 'Allocated Budget',
        data: [43000, 19000, 60000, 35000, 17000, 10000]
      }, {
        name: 'Actual Spending',
        data: [50000, 39000, 42000, 31000, 26000, 14000]
      }]
    };

    element = $compile(element)(scope);
    scope.$apply();

    chart = element.highcharts();
    labels = element.find(".highcharts-stack-labels > text");
    tooltipLabel = element.find(".highcharts-tooltip> text");
  }));

  it("debe de ser capaz de redibujarse al cambiar los datos proporcionados", function(){
     scope.datos = {
        categories: [
          'Uno',
          'Dos',
          'Tres',
          'Cuatro',
          'Cinco',
          'Seis'
        ],
        series: [{
          name: 'Serie 1',
          data: [1, 2, 3, 4, 5, 6]
        }, {
          name: 'Serie 2',
          data: [1, 2, 3, 4, 5, 6]
        }]
      };

      scope.$apply();

      expect(chart.xAxis[0].categories).toEqual(scope.datos.categories);
      expect(chart.series[0].yData).toEqual(scope.datos.series[0].data);
      expect(chart.series[1].yData).toEqual(scope.datos.series[1].data);
      expect(chart.series[0].name).toEqual(scope.datos.series[0].name);
      expect(chart.series[1].name).toEqual(scope.datos.series[1].name);
  });

   it("debe de mostrar las categorias correctas", function(){
      scope.datos.categories.map(function(categoria, i){
        expect($(labels[i]).text()).toBe(categoria);
      });
   });

   it("debe de mostrar el numero correcto de barras", function(){
      var dataLength = 0;

      scope.datos.series.map(function(serie){ dataLength += serie.data.length });

      expect(chart.pointCount).toBe(dataLength);
    });

    it("debe de mostrar un cursor para indicar que se puede dar click en alguna categoria", function(){
      expect(labels.css("cursor")).toBe("pointer");
      expect(tooltipLabel.css("cursor")).toBe("pointer");
    });

    it("debe disparar un evento al dar click en alguna categoria", function(){   
      scope.onLabelClick = function(e){};

      spyOn(scope, 'onLabelClick');

      labels.click();

      expect(scope.onLabelClick.callCount).toBe(labels.length);
    });

    it("debe disparar un evento al dar click en la categoria del tooltip", function(){   
      scope.onLabelClick = function(e){};

      spyOn(scope, 'onLabelClick');

      tooltipLabel.click();

      expect(scope.onLabelClick.callCount).toBe(tooltipLabel.length);
    });
});
