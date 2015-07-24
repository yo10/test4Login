'use strict';

angular.module('testLoginApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      controller: function($scope,AuthService,$location){
          $scope.logout = function(){
              AuthService.logout()
              $location.path('/');
          }
      },
      link: function (scope, element, attrs) {
      }
    };
  });