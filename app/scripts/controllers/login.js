'use strict';

angular.module('paybackApp')
  .controller('LoginController', function($scope, $rootScope, simpleLogin) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err, user) {
        $scope.err = err ? err + '' : null;
        $scope.$apply(function() {
          $rootScope.currentUser = user;
        });
      });
    };

    $scope.logout = function() {
      simpleLogin.logout();
    };

  });

