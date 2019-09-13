public with sharing class LoginController {
    @AuraEnabled
    public static String checkLogin(String login, String password){
        List<Account> accounts = [
                                    SELECT
                                            Id,
                                            Name,
                                            Login__c,
                                            Password__c
                                    FROM    Account
                                    WHERE   Login__c =: login
                                    LIMIT   1
                                  ];
        if(accounts[0].Login__c == null) return null;
        if(!accounts.isEmpty() && accounts[0].Password__c == password) return accounts[0].Id;
        return null;
    }

}