angular.module('paybackApp').directive('user', ['$firebase', 'FIREBASE_URI', 'UsersService',
    function ($firebase, FIREBASE_URI, UsersService) {
        var linker = function (scope, element, attrs) {
            scope.myInfo = $firebase(new Firebase(FIREBASE_URI + 'users/' + scope.currentUser));
        };
 
        var controller = function ($scope) {
            $scope.updateInformation = function () {
                // Update internally since it is a local concern
                $scope.myInfo.$save();
            };
        };
 
        return {
            scope: true,
            link: linker,
            controller: controller
        };
    }]);