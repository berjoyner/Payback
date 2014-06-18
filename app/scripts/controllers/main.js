'use strict';
 
angular.module('paybackApp')

  .controller('MainCtrl', function ($scope, UsersService, TransactionsService) {
    
    $scope.newTransaction = { type: '', amount: '', date: '', description: '', submitter: '', businessPartner: '', status: 'Open'};
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
 
    $scope.$watch('businessPartner', function () {
            UsersService.setBusinessPartner($scope.businessPartner);
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