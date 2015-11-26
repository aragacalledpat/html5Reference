'use strict';

/**
 * @ngdoc function
 * @name html5ReferenceApp.controller:CsspropertiesCtrl
 * @description
 * # CsspropertiesCtrl
 * Controller of the html5ReferenceApp
 */
angular.module('html5ReferenceApp')
  .controller('CsspropertiesCtrl', ["$scope","$http", function ($scope, $http) {

      $scope.pseudoClasses;

      $http.get('/css_properties.json')
          .success(function(data){
               
              $scope.pseudoClasses = data.pseudoclasses;
              
          });
  }]);
