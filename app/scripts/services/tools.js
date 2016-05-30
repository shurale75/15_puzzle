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
        return {
            swapElements: function (arr, index1, index2) {
                var temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
            },

            getPossibleMoves: function (curIndex, size, direct) {
                var poscor;

                switch (direct) {
                    case 'up':
                        poscor = ((curIndex + 1) > (size * (size - 1))) ? curIndex : (curIndex + size);
                        break;
                    case 'down':
                        poscor = (curIndex < size) ? curIndex : (curIndex - size);
                        break;
                    case 'left':
                        poscor = (((curIndex + 1) % size) === 0) ? curIndex : (curIndex + 1);

                        break;
                    case 'right':
                        poscor = ((curIndex % size) === 0) ? curIndex : (curIndex - 1);
                        break;
                }
                return poscor;
            },

            shuffle: function (arrToShuffle) {
                var arr = arrToShuffle;
                var tempArray = [];
                var n = arr.length;
                for (var i = 0; i < n; i++) {
                    var el = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
                    tempArray.push(el);
                }
                return tempArray;
            },

            updateAllPositions: function (arr, size) {
                for (var i = 0; i < arr.length; i++) {
                    this.updateElementPosition(arr[i], i, size);
                }
            },

            updateElementPosition: function (element, index, size) {
                var ecoord = this.getPositionByIndex(index, size);
                element[0].children[0].style.transform = 'translate('+ecoord[0]+'px,'+ecoord[1]+'px)';
            },

            getPositionByIndex: function (index, size) {
                return [Math.floor(index % size) * 100, Math.floor(index / size) * 100];
            },

            isGameCompleted: function(arr){
                for(var i=0; i<arr.length; i++){
                    if(arr[i].id != i){
                        return false;
                    }
                }

                return true;
            }
        }
    });
