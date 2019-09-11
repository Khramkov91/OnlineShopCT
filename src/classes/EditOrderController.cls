/**
 * Created by user on 09-Sep-19.
 */

public with sharing class EditOrderController {

    @AuraEnabled
    public static Account getAccountById(String AccId) {
        return [SELECT Id, Name, Phone FROM Account WHERE Id =: AccId];
    }

    @AuraEnabled
    public static Account saveAccount(Account acc) {
        update acc;
        return acc;
    }

    @AuraEnabled
    public static List<Catalog__c> getListOfProducts() {
        return [SELECT Id, Name, Quantity__c, Category__c, Cost__c FROM Catalog__c];
    }
}