({
    sortByCost : function(component) {

        var action = component.get('c.sortCotolog');
        action.setParams({
                            min : component.find("inputFormMin").get("v.value"),
                            max : component.find("inputFormMax").get("v.value"),
                            category : component.find("category").get("v.value")});

        action.setCallback(this, function(actionResult) {
            component.set('v.cotologMain', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },
});