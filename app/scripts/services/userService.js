// var app = angular.module('paybackApp', ['firebase']);

// app.constant('FIREBASE_URI', 'https://payback.firebaseio.com/');

// app.controller('MainCtrl', ['$scope', '$firebaseSimpleLogin', 'FIREBASE_URI',
//     function ($scope, $firebaseSimpleLogin, FIREBASE_URI) {
//         $scope.loginService = $firebaseSimpleLogin(new Firebase(FIREBASE_URI));
//         $scope.newUser = {email: '', password:''};
//         $scope.currentUser = null;

//         $scope.getCurrentUser = function () {
//             $scope.loginService.$getCurrentUser()
//             .then(function(user){
//                 $scope.currentUser = user;
//                 console.log(user);
//             });
//         };

//         }]);
