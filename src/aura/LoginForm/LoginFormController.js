({

	loginClick : function (component, event, helper) {
		helper.loginClick(component);
	},
	regClick : function(component, event, helper) {
	 helper.regClick(component);
	},
	closePopup : function(component, event, helper) {
		component.destroy();
	},
});