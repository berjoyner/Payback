//Transactions Service Calls to add transactions, remove transactions, & pulling up transactions information. 
 
angular.module('paybackApp').factory('TransactionsService', ['$firebase', 'FIREBASE_URI', 'UsersService',
    function ($firebase, FIREBASE_URI, UsersService) {
        var transactionsRef = new Firebase(FIREBASE_URI + 'transactions');
        var transactions = $firebase(transactionsRef);
 
        var getTransactions = function () {
            return transactions;
        };
 
        var addTransaction = function (transaction, currentUser) {
            var dataRef = new Firebase(FIREBASE_URI + '/users/' + transaction.loaner);
                dataRef.on('value', function(snapshot) {
                    transaction.loanerName = snapshot.val().name;
                  console.log('Loaner name is ' + snapshot.val().name);
        });
            var dataRef = new Firebase(FIREBASE_URI + '/users/' + transaction.loanee);
                dataRef.on('value', function(snapshot) {
                    transaction.loaneeName = snapshot.val().name;
                  console.log('Loanee name is ' + snapshot.val().name);
        });

            transactions.$add(transaction).then(function(ref){
                console.log("Transaction Added");
                UsersService.addTransactionForUsers(ref);
            })
        };
 
        var removeTransaction = function (transactionId) {
            UsersService.removeTransactionForUsers(transactionId);
            transactions.$remove(transactionId);
                console.log("Transaction Removed");
            }
        
 
        return {
            getTransactions: getTransactions,
            addTransaction: addTransaction,
            removeTransaction: removeTransaction
        };
    }]);

