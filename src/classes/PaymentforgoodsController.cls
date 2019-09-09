/**
 * Created by Pavel on 09.09.2019.
 */

public with sharing class PaymentforgoodsController {
    @AuraEnabled
    public static List <Card__c> getCards() {
        return [SELECT Id, Name, CardNumber__c, Cash__c FROM Card__c ];
    }
}