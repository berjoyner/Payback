  'use strict';

angular.module('paybackApp')

  .controller('MainCtrl', function ($scope, UsersService, TransactionsService) {
    $scope.addUser = function(newUser) {
        UsersService.addUser(newUser);
        console.log(newUser);
    };

    $scope.getUsers = function() {
      return UsersService.getUsers();
    };

    $scope.addTransaction = function(newTransaction) {
      TransactionsService.addTransaction(newTransaction);
      console.log(newTransaction);
    };
  });
