/**
 * Created by user on 09-Sep-19.
 */

({
    createAccount: function (component, newAccount) {
        let action = component.get("c.saveAccount");
        action.setParams({
            acc: newAccount
        });
        $A.enqueueAction(action);
    }
});