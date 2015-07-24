'use strict';

angular.module('testLoginApp')
  .directive('profile', function () {
    return {
      templateUrl: 'app/profile/profile.html',
      restrict: 'EA',
	  controller: 'ProfileCtrl',

      link: function (scope, element, attrs) {
      }
    };
  });