({
	registerAcc : function(component, event, helper) {
        helper.addAccount(component, acc);
        component.destroy();
    },
})