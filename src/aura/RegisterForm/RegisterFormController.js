({
    doInit : function(component, event, helper) {
        helper.init(component);
    },
	registerAcc : function(component, event, helper) {
        var acc = component.get('v.accReg');
        if(acc){
            helper.registerAcc(component, acc);
        }


    },

    closePopup : function(component, event, helper) {
        component.destroy();
    },

})