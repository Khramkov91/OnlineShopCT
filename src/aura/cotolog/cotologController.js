({
    doInit: function (component, event, helper) {
        helper.sortByCost(component);
    },
    changeList: function (component, event, helper) {
       /* let min = component.find('inputFormMin').get("v.value");
        let max = component.find('inputFormMax').get("v.value");
        let minn = component.find('inputFormMin');
        if (min > max) {
            minn.set("v.errors", [{message: "Input not a number: "}]);
        } else*/
        helper.sortByCost(component);

    },
    addInBasket: function (component, event) {
        let myBasket = component.get("v.basket");
        myBasket = JSON.parse(JSON.stringify(myBasket));
        let catal = event.getSource().get("v.value");
        catal = JSON.parse(JSON.stringify(catal));
        let allRecords = component.get("v.cotologMain");
        allRecords = JSON.parse(JSON.stringify(allRecords));
                if (myBasket.length == 0) {
                    if(catal.Quantity__c > 0) {
                        catal.Quantity__c = 1;
                        myBasket.push(catal);
                    }
                } else {
                    let count = 0;
                    for (let i = 0; i < myBasket.length; i++) {
                        if (myBasket[i].Id === catal.Id) {
                            count++;
                            for (let a = 0; a < allRecords.length; a++) {
                                if (allRecords[a].Id === catal.Id) {
                                    if(allRecords[a].Quantity__c != myBasket[i].Quantity__c) {
                                        myBasket[i].Quantity__c += 1;

                                    }
                                }
                            }
                        }
                    }
                    if (count == 0) {
                        if(catal.Quantity__c > 0) {
                            catal.Quantity__c = 1;
                            myBasket.push(catal);
                        }
                    }
                }
        component.set("v.basket", myBasket);
    },

    inBasket: function(component, event, helper) {
        let basket = JSON.parse(JSON.stringify(component.get("v.basket")));
        let inBasket = $A.get("e.c:inBasketEvent");
        inBasket.setParams({"CatalogItems" : basket});
        inBasket.fire();
        component.destroy();
    }
});