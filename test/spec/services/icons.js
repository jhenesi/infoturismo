'use strict';

describe('Service: icons', function () {

  // load the service's module
  beforeEach(module('infoturismoApp'));

  // instantiate service
  var icons;
  beforeEach(inject(function (_icons_) {
    icons = _icons_;
  }));

  it('should do something', function () {
    expect(!!icons).toBe(true);
  });

});
