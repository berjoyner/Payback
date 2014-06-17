//Transactions Service Calls to add transactions, remove transactions, & pulling up transactions information. 
 
angular.module('paybackApp').factory('TransactionsService', ['$firebase', 'FIREBASE_URI', 'UsersService',
    function ($firebase, FIREBASE_URI, UsersService) {
        var transactionsRef = new Firebase(FIREBASE_URI + 'transactions');
        var transactions = $firebase(transactionsRef);
 
        // var getTransactions = function () {
        //     return transactions;
        // };
 
        var addTransaction = function (transaction, currentUser) {
            transaction.submitter = currentUser;
            transactions.$add(transaction).then(function(ref){
                alert("Transaction Added");
                UsersService.addTransactionForUsers(ref);
            })
        };
 
        // var removeTransaction = function (transactionId) {
        //     UsersService.removeTransactionForUsers(transactionId);
        //     transactions.$remove(transactionId);
        //         alert("Transaction Removed");
        //     }
        
 
        return {
            // getTransactions: getTransactions,
            addTransaction: addTransaction,
            // removeTransaction: removeTransaction
        };
    }]);

