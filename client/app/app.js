'use strict';

angular.module('testLoginApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {
      $urlRouterProvider      
	   .otherwise('/'); 
	  
	$stateProvider
      .state('/', {
            url: '/',
            template: '<login></login>'
      })
      .state('login', {
        url: '/login',
        template: '<login></login>'        
      })
	  .state('profile', {
        url: '/profile',
        template: '<profile></profile>'        
      });
	 
 $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {

        if(response.status === 401) {
         // $location.path('/login');
          // remove any stale tokens
          //$cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, AuthService) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      AuthService.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
         // $location.path('/login');
        }
      });
    });
  });