'use strict';

/**
 * @ngdoc directive
 * @name 15PuzzleApp.directive:puzzlegame
 * @description
 * # puzzlegame
 */
angular.module('15PuzzleApp')
    .directive('puzzleGame', function () {
        return {
            templateUrl: '/views/templates/game.html',
            controller: 'gameCtrl',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {

            }
        };
    });
