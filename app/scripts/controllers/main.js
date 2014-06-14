  'use strict';

angular.module('paybackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

//Controller for Adding and Removing Users to Database 

  .controller('UserController',['$scope', '$location', 'UserService', function ($scope, $location, UserService) {
    $scope.users = UserService.getAllUsers();

    $scope.addUser = function() {
      UserService.newUser($scope.newUser);
      $location.path('#/mybank');
    };

    $scope.removeUser = function(userId) {
      UserService.removeUser(userId);
    };
  
  }])

  .controller('transactionController', function($scope) {

      var transactionRef = new Firebase('https://payback.firebaseio.com');
      $('.btn').click(function (e) {
        console.log("here");
          var type = $('#typeInput').val();
          var amount = $('#amountInput').val();
          var date = $('#dateInput').val();
          var description = $('#descriptionInput').val();
          transactionRef.push({Type: type, Amount: amount, Date: date, Description: description});
          $('.btn').val('');
        });
    });

//   var userRef = new Firebase('https://payback.firebaseio.com/twitter/');
// julieRef.on('value', function(snapshot) {
//   if(snapshot.val() === null) {
//     alert('User julie does not exist.');
//   } else {
//     var firstName = snapshot.val().name.first;
//     var lastName = snapshot.val().name.last;
//     alert('User julie’s full name is: ' + firstName + ' ' + lastName);
//   }
// });


//   function DropdownCtrl($scope) {
//   $scope.items = [
//     'The first choice!',
//     'And another choice for you.',
//     'but wait! A third!'
//   ];

//   $scope.status = {
//     isopen: false
//   };

//   $scope.toggled = function(open) {
//     console.log('Dropdown is now: ', open);
//   };

//   $scope.toggleDropdown = function($event) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     $scope.status.isopen = !$scope.status.isopen;
//   };
// }

