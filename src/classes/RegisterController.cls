public  class RegisterController {

    @AuraEnabled
    public static void addAccount(Account account){
        try {
            insert account;
        }catch (DmlException e){
            throw new AuraHandledException(e.getDmlMessage(0));
        }
      }
}