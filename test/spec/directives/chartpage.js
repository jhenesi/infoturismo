'use strict';

describe('Directive: chartpage', function () {

  // load the directive's module
  beforeEach(module('infoturismoApp'));

  var element,
    scope;

  beforeEach(module('app/templates/chartpage.html'));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chartpage></chartpage>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chartpage directive');
  }));
});
