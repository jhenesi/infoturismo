'use strict';
 
describe('Unit: La directiva chartRadar', function() {
  beforeEach(module('infoturismoApp'));

  var element, scope, chart;

  beforeEach(inject(function($rootScope, $compile) {
      element = angular.element(
        '<chart-radar w={{ancho}} h={{alto}} title="Budget vs spending" categories="categorias"  series="series"></chart-radar>'
      );
 
      scope = $rootScope.$new();

        scope.categorias = [
          'Sales', 
          'Marketing', 
          'Development', 
          'Customer Support',
          'Information Technology', 
          'Administration'
        ];

        scope.series = [{
            name: 'Allocated Budget',
            data: [43000, 19000, 60000, 35000, 17000, 10000]
        }, {
            name: 'Actual Spending',
            data: [50000, 39000, 42000, 31000, 26000, 14000]
        }];
 
      element = $compile(element)(scope);
      scope.$apply();

      chart = element.highcharts();
    }));

    it("debe de contar con el titulo proporcionado", function(){
      expect(chart.options.title.text).toBe("Budget vs spending")
    });

    it("debe de contar con las categorias proporcionadas", function(){
      expect(chart.options.xAxis[0].categories).toEqual([
        'Sales', 
        'Marketing', 
        'Development', 
        'Customer Support',
            'Information Technology', 
            'Administration'
        ]);
    });

    it("debe de contar con los datos proporcionados", function(){
      expect(chart.options.series[0].name).toBe('Allocated Budget');
      expect(chart.options.series[0].data).toEqual([
        43000, 
        19000, 
        60000, 
        35000, 
        17000, 
        10000
      ]);
      expect(chart.options.series[1].name).toBe('Actual Spending');
      expect(chart.options.series[1].data).toEqual([
        50000, 
        39000, 
        42000, 
        31000, 
        26000, 
        14000
      ]);
    });
});