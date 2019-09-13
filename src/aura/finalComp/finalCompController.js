/**
 * Created by user on 13-Sep-19.
 */

({
    handlerBasket: function(component, event, helper) {
        component.set("v.CatalogItems", JSON.parse(JSON.stringify(event.getParams("CatalogItems"))));
        component.set("v.flagItemsAdded", true);
        console.log(event.getParams("CatalogItems"));
    },

    handlerAccount: function(component, event, helper) {
        component.set("v.Id", event.getParam("AccountId"));
        component.set("v.flagLoggedIn", true);
        console.log(JSON.parse(JSON.stringify(component.get("v.Id"))));
    },

    handlerOrder: function (component, event, helper) {
        component.set("v.fullCost", event.getParam("fullCost"));
        component.set("v.Id", event.getParam("Id"));
        component.set("v.flagMakeOrder", true);
    }
});