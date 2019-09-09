/**
 * Created by Pavel on 09.09.2019.
 */

public with sharing class AccountsController {
    @AuraEnabled
    public static List <Account> getAccounts() {
        return [SELECT Id, name, industry, Type, NumberOfEmployees, TickerSymbol, Phone FROM Account ORDER BY createdDate ASC];
    }
}