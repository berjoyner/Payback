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
      // .when('/newPost', {
      //   authRequired: false,
      //   templateUrl: 'views/newPost.html',
      //   controller: 'UserController'
      // })
      .when('/newAccount', {
        authRequired: false,
        templateUrl: 'views/newAccount.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        authRequired: false,
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.constant('FIREBASE_URI', 'https://payback.firebaseio.com');
