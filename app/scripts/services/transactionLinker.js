//This is what we use to create a Transaction link to the users
 
angular.module('paybackApp').directive('transaction', ['$firebase', 'FIREBASE_URI', 'TransactionsService',
    function ($firebase, FIREBASE_URI, TransactionsService) {
        var linker = function (scope, element, attrs) {
            scope.transactionId = attrs['transactionId'];
            scope.myTransaction = $firebase(new Firebase(FIREBASE_URI + 'transactions/' + scope.transactionId));
        };
 
        var controller = function ($scope) {
            $scope.updateTransaction = function () {
                // Update internally since it is a local concern
                $scope.myTransaction.$save();
            };
 
            $scope.removeTransaction = function () {
                // Delegate deletion since it is a global concern
                TransactionsService.removeTransaction($scope.transactionId);
            };
        };
 
        return {
            scope: true,
            link: linker,
            controller: controller
        };
    }]);