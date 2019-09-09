/**
 * Created by Pavel on 09.09.2019.
 */

({
    doInit: function(component, event, helper) {
        helper.getCardsList(component);
    },
    deleteCard: function(component, event, helper) {
        event.preventDefault();
        var cardName = event.target.getElementsByClassName('card-name')[0].value;
        confirm('Delete the ' + CardName + ' card? (don’t worry, this won’t actually work!)');
    }
});