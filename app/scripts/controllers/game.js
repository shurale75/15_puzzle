'use strict';

/**
 * @ngdoc function
 * @name 15PuzzleApp.controller:GamectrlCtrl
 * @description
 * # GamectrlCtrl
 * Controller of the 15PuzzleApp
 */
angular.module('15PuzzleApp')
    .controller('gameCtrl', function ($compile, $scope, tools, $filter, $timeout) {
        $scope.size = 4;
        $scope.imgsrc = '/images/image1.jpg';
        $scope.totalPieces = $scope.size * $scope.size;
        $scope.pieces = [];
        $scope.lastIndex = $scope.totalPieces - 1;

        $scope.init = function () {
            for (var i = 0; i < $scope.totalPieces; i++) {
                var p = $compile("<puzz-piece index = " + i + "></puzz-piece>")($scope);
                p.id = i;
                $scope.pieces.push(p);
            }

            $scope.nullElement = $scope.pieces[$scope.lastIndex];

            $timeout(function () {
                angular.forEach($scope.pieces, function (p) {
                    angular.element('#puzzle').append(p);
                });
                tools.updateAllPositions($scope.pieces, $scope.size);
                //$scope.shuffle();
            }, 100);

        }

        $scope.shuffle = function() {
            $scope.pieces = tools.shuffle($scope.pieces, $scope.size);
            $timeout(function () {
                tools.updateAllPositions($scope.pieces, $scope.size);
            }, 300);
        }

        $scope.move = function (direction) {
            var nullId = $scope.pieces.indexOf($scope.nullElement);
            var posMoves = tools.getPossibleMoves(nullId, $scope.size);
            switch (direction) {
                case 'up':
                    if (posMoves.top != nullId) {
                        tools.swapElements($scope.pieces, nullId, posMoves.top);
                    }
                    break;
                case 'down':
                    if (posMoves.bot != nullId) {
                        tools.swapElements($scope.pieces, nullId, posMoves.bot);
                    }
                    break;
                case 'left':
                    if (posMoves.left != nullId) {
                        tools.swapElements($scope.pieces, nullId, posMoves.left);
                    }
                    break;
                case 'right':
                    if (posMoves.right != nullId) {
                        tools.swapElements($scope.pieces, nullId, posMoves.right);
                    }
                    break;
            }

            $timeout(function () {
                tools.updateAllPositions($scope.pieces, $scope.size);
            });
        }

        $scope.init();

    });
