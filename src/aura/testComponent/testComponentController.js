/**
 * Created by user on 12-Sep-19.
 */

({
    makeOrder: function (component, event, helper) {
        component.set("v.fullCost", event.getParam("fullCost"));
    }
});