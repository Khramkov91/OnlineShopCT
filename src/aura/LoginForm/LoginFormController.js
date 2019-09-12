({
	doInit : function(component, event, helper) {
		helper.init(component);
	},
	loginClick : function (component, event, helper) {
		helper.loginClick(component);
	},
	regClick : function(component, event, helper) {
	 helper.regClick(component);
	},
	closePopup : function(component, event, helper) {
		component.destroy();
	},
	showToast : function(component, event, helper) {
		var resultsToast = component.get("v.");
		resultsToast.setParams({
			"title": event.getParam('title'),
			"message": event.getParam('message')
		});
		resultsToast.fire();
	}
})