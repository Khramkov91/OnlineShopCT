/**
 * Created by user on 09-Sep-19.
 */

({
    doInit: function (component, event, helper) {
        let action = component.get("c.getAccountById");
        let accId = component.get("v.AccountLogin_Id");
        action.setParams({
            AccId: accId
        });

        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.newAccount.Name", response.getReturnValue().Name);
                component.set("v.newAccount.Phone", response.getReturnValue().Phone);
                console.log(response.getReturnValue().Name);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    
    saveAccInfo: function (component, event, helper) {
        let validAccount = component.find("accField").reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get("v.validity").valid;
        }, true);

        if (validAccount) {
            let newAccount = component.get("v.newAccount");
            newAccount.Id = component.get("v.AccountLogin_Id");
            console.log(JSON.stringify(newAccount));
            helper.createAccount(component, newAccount);
        }

    }
});