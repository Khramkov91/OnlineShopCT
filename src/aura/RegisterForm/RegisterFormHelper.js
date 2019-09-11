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
	registerAcc : function(component, acc) {
	//	var reg = component.get("v.accReg");
		console.log('acc helper', acc);
		var action = component.get("c.addAccount");
		action.setParams({account : acc});
		action.setCallback(this, function (response) {
			console.log('acc insert');
			console.log('response.getState()' + response.getState());
			var state = response.getState();
			if (state === "SUCCESS") {
				alert('SUCCESS');
				// $A.get('e.force:AccountCreateEvent').fire();
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
		component.destroy();
		});
		$A.enqueueAction(action);

	},

	closePopup : function(component, event, helper) {
		component.destroy();
	}
});