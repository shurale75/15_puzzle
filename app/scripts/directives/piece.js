'use strict';

/**
 * @ngdoc directive
 * @name 15PuzzleApp.directive:piece
 * @description
 * # piece
 */
angular.module('15PuzzleApp')
    .directive('puzzPiece', function () {
        return {
            templateUrl: '/views/templates/piece.html',
            restrict: 'E',
            scope: {
                index: '='
            },
            link: function postLink(scope) {
                scope.lastIndex = scope.$parent.lastIndex;
            }
        };
    });
