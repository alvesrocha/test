angular.module('form').factory('callbackService', function() {

	var callbackService = [];
	var callbacks = [];

	callbackService.updateComponent = function(component) {
		// notify if there are any listeners
		var i = 0;
		for (i = 0; i < callbacks.length; i++)
			callbacks[i](component);
	}
	// register listener
	callbackService.onComponentUpdated = function(callback) {
		callbacks.push(callback);
	}
	return callbackService;
});