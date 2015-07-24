'use strict';

angular.module('testLoginApp')
    .controller('LoginCtrl', function ($scope, $location, AuthService) {
        $scope.entity = {};
        $scope.alerts = {};
        $scope.submitForm = function (isValid) {
            console.log("submitForm=" + $scope.entity);
            if (isValid) {
                AuthService.login($scope.entity)
                    .then(function () {
                        $location.path('/profile');
                    })
                    .catch(function (err) {
                        $scope.alerts = [{ type: 'danger', msg: err.message.toString()}];
                    });
            }
        };


        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

    });
