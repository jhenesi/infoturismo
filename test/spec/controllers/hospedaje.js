'use strict';

describe('Controller: HospedajeCtrl', function () {

  // load the controller's module
  beforeEach(module('infoturismoApp'));

  var HospedajeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HospedajeCtrl = $controller('HospedajeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
