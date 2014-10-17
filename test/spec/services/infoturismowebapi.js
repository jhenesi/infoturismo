'use strict';

describe('Service: infoturismoWebApi', function () {

  // load the service's module
  beforeEach(module('infoturismoApp'));

  // instantiate service
  var infoturismoWebApi;
  beforeEach(inject(function (_infoturismoWebApi_) {
    infoturismoWebApi = _infoturismoWebApi_;
  }));

  it('should do something', function () {
    expect(!!infoturismoWebApi).toBe(true);
  });
});
