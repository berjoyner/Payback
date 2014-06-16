  'use strict';

angular.module('paybackApp')
  .controller('MainCtrl', function ($scope, UsersService) {
    $scope.addUser = function(newuser) {
        UsersService.addUser(newuser);
        console.log(newuser);
    };

  });
