angular.module('paybackApp')
	.factory('BlogService',['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
			var ref = new Firebase(FIREBASE_URI);
			var blogPosts = $firebase(ref);

			// CRUD Methods for Adding & Editing Users 

			var getAllPosts = function() {
					return blogPosts;
			};

			var newPost = function(post) {
				blogPosts.$add(post);
			};
			var removePost = function(id) {
				blogPosts.$remove(id);
			};

			return {
				getAllPosts: getAllPosts,
				newPost: newPost,
				removePost: removePost
			}

	}]);