/**
 * Created by user on 09-Sep-19.
 */

({
    getCatalogItems: function (component, event, helper) {
        let action = component.get("c.getListOfProducts");
        action.setCallback(this, function (response) {
            let state = response.getState();
            let fullCost = 0;
            if (state === "SUCCESS") {
                component.set("v.CatalogItems", response.getReturnValue());
                for (let i = 0; i < response.getReturnValue().length; i++) {
                    fullCost += response.getReturnValue()[i].Quantity__c * response.getReturnValue()[i].Cost__c;
                }
                component.set("v.fullCost", fullCost);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        $A.enqueueAction(action);
    },

    doInit: function (component, event, helper) {
        let action = component.get("c.getAccountById");
        let accId = component.get("v.AccountLogin_Id");
        action.setParams({
            AccId: accId
        });

        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.editAccount.Name", response.getReturnValue().Name);
                component.set("v.editAccount.Phone", response.getReturnValue().Phone);
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    
    saveAccInfo: function (component, event, helper) {
        let validAccount = component.find("accField").reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get("v.validity").valid;
        }, true);

        if (validAccount) {
            let editedAccount = component.get("v.editAccount");
            editedAccount.Id = component.get("v.AccountLogin_Id");
            helper.createAccount(component, editedAccount);
            component.set("v.isTruth", true);
        }
    }
});