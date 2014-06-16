  'use strict';

angular.module('paybackApp')

  .controller('MainCtrl', function ($scope, UsersService) {
    $scope.addUser = function(newUser) {
        UsersService.addUser(newUser);
        console.log(newUser);
    };

  })

  .controller('TransactionsCtrl', function ($scope, TransactionService){
    $scope.addTransaction = function(newTransaction) {
      TransactionService.addTransaction(newTransaction);
      console.log(newTransaction);

    }
  })
