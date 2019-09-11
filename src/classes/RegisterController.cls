public  class RegisterController {

    @AuraEnabled
    public static String addAccount(Account account){
        insert account;
        return 'account.Id';
      }
}