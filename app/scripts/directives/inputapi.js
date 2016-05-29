'use strict';

/**
 * @ngdoc directive
 * @name 15PuzzleApp.directive:inputapi
 * @description
 * # inputapi
 */
angular.module('15PuzzleApp')
    .directive('inputApi', function ($window) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
               angular.element($window).bind('keydown', function(e) {
                    e.preventDefault();
                    switch (e.keyCode) {
                        case 37:
                            scope.move('left');
                            e.preventDefault();
                            break;
                        case 38:
                            scope.move('up');
                            e.preventDefault();
                            break;
                        case 39:
                            scope.move('right');
                            e.preventDefault();
                            break;
                        case 40:
                            scope.move('down');
                            e.preventDefault();
                            break;
                    }
                });
            }
        };
    });
