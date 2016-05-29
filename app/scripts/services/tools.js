'use strict';

/**
 * @ngdoc service
 * @name 15PuzzleApp.tools
 * @description
 * # tools
 * Service in the 15PuzzleApp.
 */
angular.module('15PuzzleApp')
    .service('tools', function () {
        var Tools = {};

        Tools.swapElements = function(arr, index1, index2){
            var temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = temp;
        }

        Tools.getPossibleMoves = function(curIndex, size){
            var poscor = {};
            poscor.right = (curIndex % size === 0) ? curIndex : curIndex-1;
            poscor.left = ((curIndex + 1) % size === 0) ? curIndex : curIndex+1;
            poscor.bot = (curIndex < size) ? curIndex : curIndex - size;
            poscor.top = (curIndex + 1 > size * (size - 1)) ? curIndex : curIndex + size;

            return poscor;
        }

        Tools.shuffle = function (arrToShuffle) {
            var arr = arrToShuffle;
            var tempArray = [];
            var n = arr.length;
            for (var i = 0; i < n; i++) {
                var el = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
                el.pid = i;
                tempArray.push(el);
            }

            return tempArray;
        };

        Tools.updateAllPositions = function (arr, size) {
            for (var i = 0; i < arr.length; i++) {
                Tools.updateElementPosition(arr[i], i, size);
            }
        }

        Tools.updateElementPosition = function (element, index, size) {
            var ecoord = Tools.getPositionByIndex(index, size);
            element[0].children[0].style.transform = 'translate('+ecoord[0]+'px,'+ecoord[1]+'px)';
        }

        Tools.getPositionByIndex = function (index, size) {
            return [Math.floor(index % size) * 100, Math.floor(index / size) * 100];
        };

        return Tools;
    });
