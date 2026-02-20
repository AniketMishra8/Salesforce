public with sharing class CreateAccountController {
    @AuraEnabled
    public static void createNewAccountHandler(Account objAcc){
        try {
            insert objAcc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}