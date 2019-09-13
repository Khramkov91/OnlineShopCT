/**
 * Created by Pavel on 09.09.2019.
 */

({
    doInit: function(component, event, helper) {
        helper.getCardsList(component);
        console.log('1');
    },
    deleteCard: function(component, event, helper) {
        var delCard = event.getSource().get('v.value');
        console.log('delCard', delCard)
        if (delCard) {
            helper.deleteCard(component,delCard);
        }
    },
    newCard: function(component, event, helper) {
        var accId = event.getSource().get('v.value');
        console.log('accIdFROMCOM',accId);
        helper.newCard(component,accId);
    },
    payOrder: function (component, event, helper) {
        var payCard = event.getSource().get('v.value');
        console.log('payCard', payCard)
        console.log('fullCost', component.get('v.fullCost'))
        if (payCard) {
            helper.payOrder(component,payCard,component.get('v.fullCost'));
        }
    }
});