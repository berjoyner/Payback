'use strict';

angular
  .module('notaphilyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'angularfire.firebase',
    'angularfire.login',
    'simpleLoginTools'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/picker',{
        authRequired: true,
        templateUrl: 'views/picker.html',
        controller: 'LoginController'
      })
      .when('/mybank',{
        authRequired: true,
        templateUrl: 'views/mybank.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
