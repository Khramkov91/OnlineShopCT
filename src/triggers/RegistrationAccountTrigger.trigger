/**
 * Created by user on 11-Sep-19.
 */

trigger RegistrationAccountTrigger on Account (before insert) {
    if([SELECT Id FROM Account WHERE Login__c = :Trigger.New[0].Login__c].size() > 0)
        Trigger.new[0].addError('This login is already in use');

}