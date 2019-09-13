/**
 * Created by Pavel on 11.09.2019.
 */

({
    handleSaveCard: function(component,card,accId) {
        var action = component.get("c.saveCard");
        console.log('accIdInNEWCARD1',accId);
        action.setParams({
            card: JSON.stringify(card),
            accId: accId
        });
        console.log('cardInNEWCARD',JSON.stringify(card));
        console.log('accIdInNEWCARD2',accId);
        action.setCallback(this,function(response){
            var state = response.getState();
            console.log('state',state);
            if(state == "SUCCESS") {
                var acc = response.getReturnValue();
                console.log('acc',acc);
                component.destroy();
            }
        });
        $A.enqueueAction(action);
    }
});