//Transactions Service Calls to add transactions, remove transactions, & pulling up transactions information. 
 
angular.module('paybackApp').factory('TransactionsService', ['$firebase', 'FIREBASE_URI', 'UsersService',
    function ($firebase, FIREBASE_URI, UsersService) {
        var transactionsRef = new Firebase(FIREBASE_URI + 'transactions');
        var transactions = $firebase(transactionsRef);
 
        var getTransactions = function () {
            return transactions;
        };
 
        var addTransaction = function (transaction, currentUser) {
            var dataRef = new Firebase(FIREBASE_URI + '/users/' + transaction.businessPartner);
                dataRef.on('value', function(snapshot) {
                    transaction.businessPartner = snapshot.val().name;
                  console.log('Business partner name is ' + snapshot.val().name);
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

