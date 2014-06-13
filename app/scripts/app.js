'use strict';

angular
  .module('paybackApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'ui.bootstrap',
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
      .when('/mybank',{
        authRequired: true,
        templateUrl: 'views/mybank.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });