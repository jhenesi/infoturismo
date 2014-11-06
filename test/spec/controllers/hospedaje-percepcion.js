'use strict';

describe('Controller: HospedajePercepcionCtrl', function () {

  // load the controller's module
  beforeEach(module('infoturismoApp'));

  var HospedajePercepcionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HospedajePercepcionCtrl = $controller('HospedajePercepcionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
