public with sharing class LoginController {
    @AuraEnabled
    public static List<Account> getAccount(){
        return new List<Account>();
    }
    @AuraEnabled
    public static String checkLogin(String login, String password){
        Account accounts = [SELECT Id,
                                         Name
                                  FROM Account
                                  WHERE Login__c =: login
                                  ];
        if(accounts != null) {
                return accounts.Id;
            }
         return null;
    }

}