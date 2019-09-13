/**
 * Created by user on 11-Sep-19.
 */

({
    someFunc: function (component, event, helper) {

        let myItem = JSON.parse(JSON.stringify(component.get("v.CatalogItem")));
        let myBasket = JSON.parse(JSON.stringify(component.get("v.BasketItem")));
        myBasket.Name = component.get("v.CatalogItem.Name");
        myBasket.Category__c = component.get("v.CatalogItem.Category__c");
        myBasket.Cost__c = component.get("v.CatalogItem.Cost__c");

        if (myItem.Quantity__c <= 0) {
            alert("No items here");
            component.set("v.CatalogItem.Quantity__c", 0);
        } else {
            myItem.Quantity__c -= 1;
            myBasket.Quantity__c += 1;
            component.set("v.CatalogItem.Quantity__c", myItem.Quantity__c);
            component.set("v.BasketItem.Quantity__c", myBasket.Quantity__c);
        }

        console.log(myItem);
        console.log(myBasket);

    }
});