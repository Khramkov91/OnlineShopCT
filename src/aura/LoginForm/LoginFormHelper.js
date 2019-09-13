({
//Тут должна вызываться компонента с товарами
    loginClick: function (component) {
        let login = component.get("v.account.Login__c");
        let password = component.get("v.account.Password__c");
        let account = component.get("c.checkLogin");

        account.setParams({
            login:login,
            password: password});
        account.setCallback(this, function(response) {
            account = response.getReturnValue();
            component.set("v.accLogin",account);
            let state = response.getState();
            console.log(state);
            if (state === "SUCCESS" && account != null) {
                let createEvent = $A.get("e.c:AccountCreateEvent");
                createEvent.setParams({ "AccountId" : account });
                createEvent.fire();
                component.destroy();
            } else {
                alert('Please, check the entered data!');
            }
        });
        $A.enqueueAction(account);
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