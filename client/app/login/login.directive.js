'use strict';

angular.module('testLoginApp')
  .directive('login', function () {  
    return {
      templateUrl: 'app/login/login.html',
      restrict: 'EA',
	  controller: 'LoginCtrl',
      transclude: true,
      link: function (scope, element, attrs) {
      }
    };
  });