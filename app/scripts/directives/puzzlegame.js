'use strict';

/**
 * @ngdoc directive
 * @name 15PuzzleApp.directive:puzzlegame
 * @description
 * # puzzlegame
 */
angular.module('15PuzzleApp')
    .directive('puzzleGame', function ($compile, tools, $filter, $timeout, $localStorage) {
        return {
            templateUrl: '/views/templates/game.html',
            //controller: 'gameCtrl',
            restrict: 'E',
            scope:true,
            link: function postLink(scope) {
                scope.gsize = scope.gameSizes.sizeSelected.val;
                //scope.imgsrc = '/images/image1.jpg';
                scope.imgsrc = "http://wallpaperus.org/wallpapers/07/71/nature-birds-2048x1536-wallpaper-2168702.jpg";
                scope.totalPieces = scope.gsize * scope.gsize;
                scope.pieces = [];
                scope.lastIndex = scope.totalPieces - 1;

                scope.init = function () {
                    for (var i = 0; i < scope.totalPieces; i++) {
                        var p = $compile("<puzz-piece index = " + i + "></puzz-piece>")(scope);
                        p.id = i;
                        scope.pieces.push(p);
                    }

                    scope.nullElement = scope.pieces[scope.lastIndex];

                    $timeout(function () {
                        angular.forEach(scope.pieces, function (p) {
                            angular.element('#puzzle').append(p);
                        });
                        tools.updateAllPositions(scope.pieces, scope.gsize)
                    }, 100);

                }

                scope.startNewGame = function(){
                    if(scope.timerRunning){
                        scope.resetTimer();
                        scope.stopTimer();
                    }
                    scope.shuffle();
                }

                scope.shuffle = function() {
                    scope.pieces = tools.shuffle(scope.pieces, scope.gsize);
                    $timeout(function () {
                        tools.updateAllPositions(scope.pieces, scope.gsize);
                    }, 300).then(
                        $timeout(function () {
                            scope.startTimer()
                        }, 500)
                    );
                }

                scope.move = function (direction) {
                    var nullId = scope.pieces.indexOf(scope.nullElement);
                    var posMoves = tools.getPossibleMoves(nullId, scope.gsize, direction);

                    if (posMoves != nullId) {
                        tools.swapElements(scope.pieces, nullId, posMoves);
                    }

                    $timeout(function () {
                        tools.updateAllPositions(scope.pieces, scope.gsize);
                    });
                }

                scope.timerRunning = false;

                scope.startTimer = function (){
                    scope.$broadcast('timer-start');
                    scope.timerRunning = true;
                };

                scope.stopTimer = function (){
                    scope.$broadcast('timer-stop');
                    scope.timerRunning = false;
                };

                scope.resetTimer = function(){
                    scope.$broadcast('timer-reset');
                    scope.timerRunning = false;
                }

                scope.$on('timer-stopped', function (event, data){
                    //console.log('Timer Stopped - data = ', data);
                    var score = $localStorage.scores ? $localStorage.scores : [];
                    score.push(data);
                    //console.log(score);
                    $localStorage.scores = score;
                });

                scope.init();
            
            }//end of link
        };//end of rturn
    });
