'use strict';

/**
 * @ngdoc overview
 * @name frameworkDefenseApp
 * @description
 * # frameworkDefenseApp
 *
 * Main module of the application.
 */
angular
  .module('frameworkDefenseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
