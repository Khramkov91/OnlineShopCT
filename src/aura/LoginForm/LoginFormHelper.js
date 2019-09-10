({
    init : function(component) {
        var action = component.get("c.getAccount");
        action.setCallback(this,function(a){
            var state = a.getState();
            console.log(state);
            if(state == "SUCCESS"){
                console.log('a.getReturnValue', a.getReturnValue());
                component.set("v.accLogin", a.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
//Тут должна вызываться компонента с товарами OrderConfirm
    loginClick: function (component) {
        var login = component.get("v.account.Login__c");
        var password = component.get("v.account.Password__c");
        var acсount = component.get("c.checkLogin");
        acсount.setParams({login:login,password:password});
        acсount.setCallback(this, function(response) {
            var status = response.getState();
            acсount = response.getReturnValue();
            component.set("v.accLogin",acсount);
            $A.createComponent("c:OrderConfirm", {'accLogin': acсount},
                function (newComponent, status, errorMessage) {
                    if (status === "SUCCESS") {
                        var body = component.find("OrderConfirm");
                        body.set("v.body", newComponent);
                    }
                }
            );

        });
        $A.enqueueAction(acсount);
    },

	regClick : function(component) {
		$A.createComponent(
            "c:RegisterForm",
            {
            },
            function(newComponent, status, errorMessage){
                console.log('status:', status);
                if (status === "SUCCESS") {
                    var body = component.find("RegisterForm");
                    body.set("v.body", newComponent);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        );
	}
})