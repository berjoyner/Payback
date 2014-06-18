'use strict';
 
angular.module('paybackApp')

  .controller('MainCtrl', function ($scope, UsersService, TransactionsService) {
    
    $scope.newTransaction = { type: '', amount: '', date: '', description: '', loaner: '', loanee:'', businessPartner: '', status: 'Open', createdBy:''};
    $scope.transactionsForCurrentUser = [];
    $scope.tran = null;
    $scope.transactions = null;
    $scope.users = [];
 
    $scope.$watch('currentUser', function () {
            UsersService.setCurrentUser($scope.currentUser);
 
            if ($scope.currentUser) {
                // $scope.transactions = $scope.getTransactionsForCurrentUser();
            }
        });
 
    $scope.addUser = function(newUser) {
        UsersService.addUser(newUser);
        console.log(newUser);
    };
 
    $scope.getUsers = function () {
        $scope.users = UsersService.getUsers();
        return $scope.users;
    };
 
    $scope.addTransaction = function(newTransaction) {  
        newTransaction.createdBy = $scope.currentUser;
        if(newTransaction.type === 'Loan'){
          newTransaction.loaner = $scope.currentUser;
          newTransaction.loanee = newTransaction.businessPartner;
        } else {
          newTransaction.loaner = newTransaction.businessPartner;
          newTransaction.loanee = $scope.currentUser;
        }

        TransactionsService.addTransaction(newTransaction, $scope.currentUser);
    };
 
    $scope.getTransactionsForCurrentUser = function() {
        $scope.transactionsForCurrentUser = UsersService.getTransactionsForCurrentUser($scope.currentUser);
        return $scope.transactionsForCurrentUser;
    };
 
    $scope.removeTransaction = function (transactionId) {
        TransactionsService.removeTransaction(transactionId);
    };
 
 
  });