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
        templateUrl: 'views/elements.html',
        controller: 'ElementsCtrl',
        controllerAs: 'elements'
      })
      .when('/attributes', {
        templateUrl: 'views/attributes.html',
        controller: 'AttributesCtrl',
        controllerAs: 'attributes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
