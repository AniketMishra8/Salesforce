public with sharing class CreateStudentController {
    @AuraEnabled
    public static void createNewStudentHandler(Student__c objStu){
        try {
            insert objStu;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}