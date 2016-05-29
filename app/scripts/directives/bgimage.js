'use strict';

/**
 * @ngdoc directive
 * @name 15PuzzleApp.directive:bgimage
 * @description
 * # bgimage
 */
angular.module('15PuzzleApp')
  .directive('bgImage', function (tools) {
      return function (scope, element, attrs) {
          var bgpos = tools.getPositionByIndex(scope.index, scope.$parent.size);
          element.css({
              'background-image': 'url('+scope.$parent.imgsrc+')',
              'background-size': (scope.$parent.size * 100) + 'px ' + (scope.$parent.size * 100) + 'px',
              'background-repeat': 'no-repeat',
              'background-position': -bgpos[0] + 'px ' + -bgpos[1] + 'px'
          });
      }
  });
