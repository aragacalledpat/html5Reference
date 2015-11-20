'use strict';

/**
 * @ngdoc overview
 * @name html5ReferenceApp
 * @description
 * # html5ReferenceApp
 *
 * Main module of the application.
 */
angular
  .module('html5ReferenceApp', [
    'ngRoute'
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
