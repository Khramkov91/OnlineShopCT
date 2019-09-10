({
	init : function(component) {
		var action = component.get("c.initAccount");
		action.setCallback(this,function(a){
			var state = a.getState();
			console.log(state);
			if(state == "SUCCESS"){
				console.log('a.getReturnValue', a.getReturnValue());
				component.set("v.accReg", a.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},
	registerAcc : function(component, event, helper) {
		var reg = component.get("v.accReg");
		var action = component.get("c.addAccount");
		action.setParams({reg1: reg});
		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state === "SUCCESS") {
				$A.get('e.force:AccountCreateEvent').fire();
			}else if (state === "ERROR") {
				var errors = response.getError();
				if (errors) {
					if (errors[0] && errors[0].message) {
						console.log("Error message: " +
							errors[0].message);
					}
				}
				else {
					console.log(response.getReturnValue());

				}

			}

		});
		$A.enqueueAction(action);
		component.destroy();
	},

	closePopup : function(component, event, helper) {
		component.destroy();
	}
});