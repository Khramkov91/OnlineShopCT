/**
 * Created by Pavel on 09.09.2019.
 */

({
    getCardsList: function(component) {
        var action = component.get('c.getCards');
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.cards', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
});