'use strict';

angular.module('testLoginApp')
  .controller('ProfileCtrl', function ($scope,User, AuthService) {
        $scope.user = {};
/*
        User.get({id:1})
            .$promise.then(function(user) {
                $scope.user = user;
            });
*/
        $scope.user = AuthService.getCurrentUser();

  });
