'use strict';

describe('Service: crumbs', function () {

  // load the service's module
  beforeEach(module('infoturismoApp'));

  // instantiate service
  var crumbs;
  beforeEach(inject(function (_crumbs_) {
    crumbs = _crumbs_;
  }));

  it('should do something', function () {
    expect(!!crumbs).toBe(true);
  });

});
