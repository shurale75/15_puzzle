'use strict';

/**
 * @ngdoc function
 * @name 15PuzzleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 15PuzzleApp
 */
angular.module('15PuzzleApp')
    .controller('ScoresCtrl', function ($scope, $localStorage) {
        $scope.testvar = 'testvar >>>>>>>>';
        $scope.gscores = $localStorage.scores;
        console.log('ScoresCtrl scores:', $scope.scores)
    });
