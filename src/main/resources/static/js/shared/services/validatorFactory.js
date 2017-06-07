angular.module('form').factory('validatorFactory', function() {
	
	var validatorFactory = {};
	
	validatorFactory.validate = function (question, value) {
		return true;
	}
	
	return validatorFactory;
});