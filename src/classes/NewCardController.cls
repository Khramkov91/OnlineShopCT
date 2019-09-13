/**
 * Created by Pavel on 11.09.2019.
 */

public with sharing class NewCardController {
    @AuraEnabled
    public static void saveCard(String card,String accId) {
        try {
            insert (Card__c)JSON.deserialize(card, Card__c.class);
            //Card__c cardd = (Card__c)JSON.deserialize(card, Card__c.class);
            Account_Card__c cardd = [SELECT Card_Id__c
                                FROM Account_Card__c
                                WHERE AccountId__c =: accId];
            System.debug('The value is: ' + accId);
            System.debug('The value is: ' + cardd);
            Account_Card__c newAccountCard = new Account_Card__c(Card_Id__c = cardd.Card_Id__c,AccountId__c = accId);
            System.debug('The value is: ' + newAccountCard);
            //System.debug('The value is: ' + cardd[0].Card_Id__c);
            insert newAccountCard;
        }
        catch(DMLException e){
            throw new AuraHandledException(e.getDMLMessage(0));
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }

}
}