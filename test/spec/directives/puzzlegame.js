'use strict';

describe('Directive: puzzlegame', function () {

  // load the directive's module
  beforeEach(module('15PuzzleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<puzzlegame></puzzlegame>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the puzzlegame directive');
  }));
});
