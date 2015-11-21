'use strict';

/**
 * @ngdoc function
 * @name html5ReferenceApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the html5ReferenceApp
 */
angular.module('html5ReferenceApp')
  .controller('EventsCtrl',['$scope','$http', function ($scope, $http) {

      $scope.events = [];

      $http.get('/events.json').success(function(data){
        $scope.events = data.events;
        console.log($scope.events);
      })
  }]);
