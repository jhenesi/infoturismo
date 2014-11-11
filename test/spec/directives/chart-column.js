'use strict';

describe('Directive: chartColumn', function () {

  // load the directive's module
  beforeEach(module('infoturismoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chart-column></chart-column>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chartColumn directive');
  }));
});
