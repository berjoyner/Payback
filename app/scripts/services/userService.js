// angular.module('paybackApp')

// var app = angular.module('paybackApp', ['firebase']);

// app.constant('FIREBASE_URI', 'https://payback.firebaseio.com/');

// app.controller('MainCtrl', ['$scope', 'ItemsService', 'UsersService',
//     function ($scope, ItemsService, UsersService) {
//         $scope.newItem = { name: '', description: '', count: 0 };
//         $scope.currentItem = null;
//         $scope.currentUser = null;
//         $scope.items = null;

//         $scope.users = UsersService.getUsers();

//         $scope.$watch('currentUser', function () {
//             UsersService.setCurrentUser($scope.currentUser);

//             if ($scope.currentUser) {
//                 $scope.items = UsersService.getItemsForCurrentUser();
//             }
//         });

//         $scope.addItem = function () {
//             ItemsService.addItem(angular.copy($scope.newItem));
//             $scope.newItem = { name: '', description: '', count: 0 };
//         };
//     }]);

// app.directive('item', ['$firebase', 'FIREBASE_URI', 'ItemsService',
//     function ($firebase, FIREBASE_URI, ItemsService) {
//         var linker = function (scope, element, attrs) {
//             scope.itemId = attrs['itemId'];
//             scope.myItem = $firebase(new Firebase(FIREBASE_URI + 'items/' + scope.itemId));
//         };

//         var controller = function ($scope) {
//             $scope.updateItem = function () {
//                 // Update internally since it is a local concern
//                 $scope.myItem.$save();
//             };

//             $scope.removeItem = function () {
//                 // Delegate deletion since it is a global concern
//                 ItemsService.removeItem($scope.itemId);
//             };
//         };

//         return {
//             scope: true,
//             link: linker,
//             controller: controller
//         };
//     }]);

// app.factory('UsersService', ['$firebase', 'FIREBASE_URI', function ($firebase, FIREBASE_URI) {
//     var usersRef = new Firebase(FIREBASE_URI + 'users');
//     var users = $firebase(usersRef);
//     var currentUser = null;

//     var getUsers = function () {
//         return users;
//     };

//     var getCurrentUser = function () {
//         return currentUser;
//     };

//     var setCurrentUser = function (user) {
//         currentUser = user;
//     };

//     var getItemsForCurrentUser = function () {
//         return users.$child(currentUser + '/items/');
//     };

//     var addItemForCurrentUser = function (itemRef) {
//         var child = users.$child(currentUser + '/items/' + itemRef.name());
//         child.$set(trueegg);
//     };

//     var removeItemForCurrentUser = function (itemId) {
//         users.$remove(currentUser + '/items/' + itemId);
//     };

//     return {
//         getUsers: getUsers,
//         getCurrentUser: getCurrentUser,
//         setCurrentUser: setCurrentUser,
//         getItemsForCurrentUser: getItemsForCurrentUser,
//         addItemForCurrentUser: addItemForCurrentUser,
//         removeItemForCurrentUser: removeItemForCurrentUser
//     }
// }]);

// app.factory('ItemsService', ['$firebase', 'FIREBASE_URI', 'UsersService',
//     function ($firebase, FIREBASE_URI, UsersService) {
//         var itemsRef = new Firebase(FIREBASE_URI + 'items');
//         var items = $firebase(itemsRef);

//         var getItems = function () {
//             return items;
//         };

//         var addItem = function (item) {
//             items.$add(item).then(function(ref){
//                 UsersService.addItemForCurrentUser(ref);
//             })
//         };

//         var removeItem = function (itemId) {
//             items.$remove(itemId).then(function(){
//                UsersService.removeItemForCurrentUser(itemId);
//             });
//         };

//         return {
//             getItems: getItems,
//             addItem: addItem,
//             remove Item: removeItem
//         }
//     }]);


// angular.module('paybackApp')
// 	.factory('UserService',['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
// 			var ref = new Firebase(FIREBASE_URI);
// 			var userBank = $firebase(ref);

// 			// CRUD Methods for Adding & Editing Users 

// 			var getAllUsers = function() {
// 					return userBank;
// 			};

// 			var newUser = function(user) {
// 				userBank.$add(user);
// 			};
// 			var removeUser = function(id) {
// 				userBank.$remove(id);
// 			};

// 			return {
// 				getAllUsers: getAllUsers,
// 				newUser: newUser,
// 				removeUser: removeUser
// 			}

//       }]);