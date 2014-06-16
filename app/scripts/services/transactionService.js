//These are our service calls to adding transactions, removing transactions and for pulling up 
//transaction information.
 
angular.module('paybackApp').factory('TransactionsService', ['$firebase', 'FIREBASE_URI', 'UsersService',
    function ($firebase, FIREBASE_URI, UsersService) {
        var transactionsRef = new Firebase(FIREBASE_URI + 'transactions');
        var transactions = $firebase(transactionsRef);
 
        var getTransactions = function () {
            return transactions;
        };
 
        var addTransaction = function (transaction, currentUser) {
            transaction.submitter = currentUser;
            transactions.$add(transaction).then(function(ref){
                UsersService.setBusinessPartner(transaction.businessPartner);
                UsersService.addTransactionForCurrentUser(ref);
                UsersService.addTransactionForBusinessPartner(ref);
            })
        };
 
        var removeTransaction = function (transactionId) {
            transactions.$remove(transactionId).then(function(){
               UsersService.removeTransactionForCurrentUser(transactionId);
               UsersService.removeTransactionForBusinessPartner(transactionId);
            });
        };
 
        return {
            getTransactions: getTransactions,
            addTransaction: addTransaction,
            removeTransaction: removeTransaction
        }
    }]);