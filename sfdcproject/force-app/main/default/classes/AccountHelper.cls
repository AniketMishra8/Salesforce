public with sharing class AccountHelper {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        List<Account> listOfAccounts= [SELECT Id, Name, Type, Rating, Phone From Account];

        return listOfAccounts;
    }
}