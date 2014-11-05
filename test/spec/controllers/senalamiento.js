'use strict';

describe('Controller: SenalamientoCtrl', function () {

  // load the controller's module
  beforeEach(module('infoturismoApp'));

  var SenalamientoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SenalamientoCtrl = $controller('SenalamientoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
