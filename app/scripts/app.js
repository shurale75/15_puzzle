'use strict';

/**
 * @ngdoc overview
 * @name 15PuzzleApp
 * @description
 * # 15PuzzleApp
 *
 * Main module of the application.
 */
angular
    .module('15PuzzleApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'timer'
    ])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
