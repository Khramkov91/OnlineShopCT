/**
 * Created by Pavel on 11.09.2019.
 */

({
    handleSaveCard: function(component, event, helper) {
        var card = component.get('v.Card');
        var accId = event.getSource().get('v.value');
        console.log('accIdNEWCARDCONTOLLER',accId);
        var myEvent = component.getEvent("upCards");
        if(card){
            helper.handleSaveCard(component,card,accId);
            myEvent.fire();
        }
    },
    closePopup : function(component, event, helper) {
        component.destroy();
    }
});