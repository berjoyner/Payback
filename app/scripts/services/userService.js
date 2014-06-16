angular.module('paybackApp').factory('UsersService', ['$firebase', 'FIREBASE_URI', 
	function ($firebase, FIREBASE_URI) {
	var usersRef = new Firebase(FIREBASE_URI + '/users');
	var users = $firebase(usersRef);
	var currentUser =  null;
	var businessPartner = null;

	var addUser = function (user) {
		users.$add(user).then(function(ref){
			alert("User Added");
		});
	};

	var getUsers = function () {
		return users;
	};

	var getCurrentUser = function () {
		return currentUser;
	};

	var setCurrentUser = function (user) {
		currentUser = user;
	};

	var setBusinessPartner = function (user) {
		businessPartner = user;
	}

	var getBusinessPartner = function () {
		return businessPartner;
	}

	var getTransactionsForCurrentUser = function () {
		return users.$child(currentUser + '/transactions/');
	};

	var getCurrentUserInformation = function () {
		return users.$child(currentUser + '/users/');
	};

	var addTransactionForCurrentUser = function (transactionRef) {
		var child = users.$child(currentUser + '/transactions/' + transactionRef.name());
		child.$set(true);
	};

	var removeTransactionForCurrentUser = function (transactionId){
		users.$remove(currentUser + '/transactions/' + transactionId);	
	};

	var addTransactionForBusinessPartner = function (transactionRef) {
		var child = users.$child(businessPartner + '/transactions/' + transactionRef.name());
		child.$set(true);
	};

	var removeTransactionForBusinessPartner = function (transactionId) {
		users.$remove(businessPartner + '/transactions/' + transactionId);
	};

	return {
		addUser: addUser,
		getUsers: getUsers,
		getCurrentUser: getCurrentUser,
		setCurrentUser: setCurrentUser,
		getCurrentUserInformation: getCurrentUserInformation,
		getBusinessPartner: getBusinessPartner,
		setBusinessPartner: setBusinessPartner,
		getTransactionsForCurrentUser: getTransactionsForCurrentUser,
		addTransactionForCurrentUser: addTransactionForCurrentUser,
		addTransactionForBusinessPartner: addTransactionForBusinessPartner,
		removeTransactionForCurrentUser: removeTransactionForCurrentUser,
		removeTransactionForBusinessPartner: removeTransactionForBusinessPartner
	};
}]);
