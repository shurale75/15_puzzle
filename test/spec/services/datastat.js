'use strict';

describe('Service: datastat', function () {

  // load the service's module
  beforeEach(module('15PuzzleApp'));

  // instantiate service
  var datastat;
  beforeEach(inject(function (_datastat_) {
    datastat = _datastat_;
  }));

  it('should do something', function () {
    expect(!!datastat).toBe(true);
  });

});
