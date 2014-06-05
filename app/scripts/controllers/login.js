'use strict';

angular.module('notaphilyApp')
  .controller('LoginController', function($scope, simpleLogin) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err) {
        $scope.err = err? err + '' : null;
        return $location.path('/myprofile');
      });
    };

    $scope.logout = function() {
      simpleLogin.logout();
    };

  });
