'use strict';

describe('Service: ztools', function () {

  // load the service's module
  beforeEach(module('15PuzzleApp'));

  // instantiate service
  var ztools;
  beforeEach(inject(function (_ztools_) {
    ztools = _ztools_;
  }));

  it('should do something', function () {
    expect(!!ztools).toBe(true);
  });

});
