'use strict';
 
angular.module('paybackApp')

  .controller('MainCtrl', function ($scope, UsersService, TransactionsService, $location) {
    
    $scope.newTransaction = { type: '', amount: '', date: '', description: '', loaner: '', loanee:'', loaneeName:'', loanerName:'', status: 'Open', createdBy:''};
    $scope.transactionsForCurrentUser = [];
    $scope.informationForCurrentUser =[];
    $scope.tran = null;
    $scope.transactions = null;
    $scope.users = [];
 
    $scope.$watch('currentUser', function () {
            UsersService.setCurrentUser($scope.currentUser);
 
            if ($scope.currentUser) {
                $scope.transactions = $scope.getTransactionsForCurrentUser();
                $scope.informationForCurrentUser = $scope.getInformationForCurrentUser();
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
        $location.path('/mybank');
    };
 
    $scope.getTransactionsForCurrentUser = function() {
        $scope.transactionsForCurrentUser = UsersService.getTransactionsForCurrentUser($scope.currentUser);
        return $scope.transactionsForCurrentUser;
    };

    $scope.getInformationForCurrentUser = function() {
      $scope.informationForCurrentUser = UsersService.getInformationForCurrentUser($scope.currentUser);
        return $scope.informationForCurrentUser;
    }
 
    $scope.removeTransaction = function (transactionId) {
        TransactionsService.removeTransaction(transactionId);
    };
 
 
  });