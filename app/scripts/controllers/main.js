'use strict';

/**
 * @ngdoc function
 * @name 15PuzzleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 15PuzzleApp
 */
angular.module('15PuzzleApp')
    .controller('MainCtrl', function ($scope, $route, $localStorage) {
        var defaultSize = ($localStorage.gameSize) ? $localStorage.gameSize : {val: '4', name: '4 x 4'}
        $scope.gameSizes = {
            availableSizes: [
                {val: '3', name: '3 x 3'},
                {val: '4', name: '4 x 4'},
                {val: '5', name: '5 x 5'},
                {val: '6', name: '6 x 6'}
            ],
            sizeSelected: defaultSize
        };

        $scope.sizeChange = function(){
            console.log('SIZE CHANGE');
            $localStorage.gameSize = $scope.gameSizes.sizeSelected;
            $route.reload();
        }

        console.log($localStorage);

    });
