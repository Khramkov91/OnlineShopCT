public with sharing class LoginController {
    public static List<Account> getAccount(){
        return new List<Account>();
    }
    public static String checkLogin(String login, String password){
        List<Account> accounts = new List<Account>();
        for(Account acc : accounts){
            if(acc.Login__c == login && acc.Password__c == password){
                return acc.Id;
            }
        }
        return null;
    }

    public static String checkLogin(String login, String password){
      return null;
    }

}