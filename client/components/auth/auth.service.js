'use strict';

angular.module('testLoginApp')
  .factory('AuthService', function Auth($location, $rootScope, $http, User, $cookieStore, $q) {
    var currentUser = {};
    return {

        login: function(user, callback) {
            var cb = callback || angular.noop;
            var deferred = $q.defer();

            $http.post('/auth/local', {
                email: user.email,
                password: user.password
            }).
                success(function(data) {
                    $cookieStore.put('token', data.token);
                    console.log($cookieStore.get('token'));
                    currentUser = User.get({id:data.id});
                    deferred.resolve(data);
                    return cb();
                }).
                error(function(err) {
                    this.logout();
                    deferred.reject(err);
                    return cb(err);
                }.bind(this));

            return deferred.promise;
        },

        logout: function() {
            $cookieStore.remove('token');
            currentUser = {};
        },

        getCurrentUser: function() {
            return currentUser;
        },
        getToken: function() {
            return $cookieStore.get('token');
        },

        isAuth: function() {
            return $cookieStore.get('token') != null;
        }
    };
});
