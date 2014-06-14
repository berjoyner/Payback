angular.module('paybackApp')
	.factory('UserService',['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
			var ref = new Firebase(FIREBASE_URI);
			var userBank = $firebase(ref);

			// CRUD Methods for Adding & Editing Users 

			var getAllUsers = function() {
					return userBank;
			};

			var newUser = function(user) {
				userBank.$add(user);
			};
			var removeUser = function(id) {
				userBank.$remove(id);
			};

			return {
				getAllUsers: getAllUsers,
				newUser: newUser,
				removeUser: removeUser
			}

	}]);