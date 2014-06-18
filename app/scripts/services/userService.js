//User Service calls variables to add, get, set, and remove elements from the Payback data 

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

	var addTransactionForUsers = function (transactionRef){
		var dataRef = new Firebase(FIREBASE_URI + '/transactions/' + transactionRef.name());
		dataRef.on('value', function (snapshot) {
			if (snapshot.val() != null){
				var child = users.$child(snapshot.val().loaner + '/transactions/' + transactionRef.name());
				child.$set(true);

				child = users.$child(snapshot.val().loanee + '/transactions/' + transactionRef.name());
				child.$set(true);
			}
		});
	};

	var removeTransactionForUsers = function (transactionId){
		var dataRef = new Firebase(FIREBASE_URI + '/transactions/' + transactionId);
		dataRef.on('value', function(snapshot) {
			if(snapshot.val() != null){
				users.$remove(snapshot.val().loaner + '/transactions/' + transactionId);
				users.$remove(snapshot.val().loanee + '/transactions/' + transactionId);

			}
		});
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
		removeTransactionForUsers: removeTransactionForUsers,
		addTransactionForUsers: addTransactionForUsers
	};
}]);
