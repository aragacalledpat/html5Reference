'use strict';

/**
 * @ngdoc function
 * @name html5ReferenceApp.controller:ElementsCtrl
 * @description
 * # ElementsCtrl
 * Controller of the html5ReferenceApp
 */
angular.module('html5ReferenceApp')
  .controller('ElementsCtrl', [ '$scope','$http', function ($scope, $http) {
      $scope.elements = [];
    $http.get('elements.json')
      .success(function(data){
          $scope.elements = data.elements;
          console.log($scope.elements);
      });
  }]);
