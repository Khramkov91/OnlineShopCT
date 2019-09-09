/**
 * Created by user on 09-Sep-19.
 */

public with sharing class EditOrderController {
    @AuraEnabled
    public static Id getClientId() {
        return '0012v00002UxQucAAF';
    }

    @AuraEnabled
    public static Account getAccountById(String AccId) {
        return [SELECT Id, Name, Phone FROM Account WHERE Id =: AccId];
    }

    @AuraEnabled
    public static Account saveAccount(Account acc) {
        update acc;
        return acc;
    }
}