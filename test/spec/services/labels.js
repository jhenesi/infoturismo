'use strict';

describe('Service: labels', function () {

  // load the service's module
  beforeEach(module('infoturismoApp'));

  // instantiate service
  var labels;
  beforeEach(inject(function (_labels_) {
    labels = _labels_;
  }));

  it('should do something', function () {
    expect(!!labels).toBe(true);
  });

});
