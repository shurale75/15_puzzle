'use strict';

describe('Directive: inputapi', function () {

  // load the directive's module
  beforeEach(module('15PuzzleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<inputapi></inputapi>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inputapi directive');
  }));
});
