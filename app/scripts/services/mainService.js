// var app = angular.module('paybackApp', ['firebase']);

// app.constant('FIREBASE_URI','https://payback.firebaseio.com/');

// app.controller('MainCtrl', ['$scope', 'TransactionsService', 'UsersService',
// 	function ($scope, TransactionsService, UsersService) {
// 		$scope.newTransaction = {type:'', amount:'', date:'',description:'', submitter:'', businessPartner:'', status:'Open'};
// 		$scope.currentTransaction = null;
// 		$scope.currentUser = null;
// 		$scope.businessPartner = null;
// 		$scope.transactions = null;

// 		$scope.users = UsersService.getUsers();

// 		$scope.$watch('currentUser', function () {
// 			UsersService.setCurrentUser($scope.currentUser);

// 			if($scope.currentUser) {
// 				$scope.transactions = UsersService.getTransactionsForCurrentUser();
// 				$scope.userInformation = UsersService.getCurrentUserInformation();
// 			}
// 		});
// 		$scope.$watch('businessPartner', function () {
// 			UsersService.setBusinessPartner($scope.businessPartner);	
// 		});

// 		$scope.addUser = function () {
// 			UsersService.addUser(angular.copy($scope.newUser));
// 			$scope.newUser = {name:'', email:'', city:'', state:'', twitter:''};
// 		};

// 		$scope.addTransaction = function () {
// 			TransactionsService.addTransaction(angular.copy($scope.newTransaction), $scope.currentUser);
// 			$scope.newTransaction = {type:'', amount:'', data:'', description:'', submitter:'', businessPartner:'', status:'Open'};
// 		};
// 	}]);


