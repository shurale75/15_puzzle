'use strict';

/**
 * @ngdoc function
 * @name 15PuzzleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 15PuzzleApp
 */
angular.module('15PuzzleApp')
    .controller('MainCtrl', function ($compile, $scope, tools, $timeout) {

        $scope.reload = function(){
            $scope.shuffle();
        }

    });
