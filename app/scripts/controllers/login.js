'use strict';

angular.module('paybackApp')
  .controller('LoginController', function($scope, $rootScope, simpleLogin) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err, user) {
        $scope.err = err ? err + '' : null;
        $rootScope.$apply(function() {
          $rootScope.googleUser = user;
          $rootScope.googleUserName = user.displayName;
          $rootScope.googleUserPic = user.picture;
        });
      });
    };

    $scope.logout = function() {
      simpleLogin.logout();
    };

  });

