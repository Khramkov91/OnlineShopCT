public class RegisterController {
    public Account account {get; set;}
    public RegisterController(){
        account = new Account();
        addAccount();
    }
    public String addAccount(){
       Account accountNew = new Account(
           Name = account.Name,
           Phone = account.Phone,
           Login__c = account.Login__c,
           Password__c = account.Password__c
        );
        insert accountNew;
        return accountNew.Id;
      }
}