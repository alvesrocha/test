angular.module('form').factory('businessRules', [ 'callbackService', function(callbackService) {

	var businessRules = {};

	businessRules.run = function(rules, context, components) {
		for (index in rules) {
			var rule = rules[index];
			var result = jsonLogic.apply(rule.expression, context);
			if(result){
				execute(rule.action, rule.params, components);
			}
		}
	}
	

	function execute(action, params, components) {
		switch (action) {
		case 'excludeQuestions': setQuestionsStatus(params, components, true);
			break;
		case 'includeQuestions': setQuestionsStatus(params, components, false);
			break;
		}
	}

	function setQuestionsStatus(params, components, disabled) {
		for(i in params){
			var component = components[params[i]];
			if(component.disabled !== disabled) {
				component.disabled = disabled;
				//callbackService.updateComponent(component);
			}
		}
	}

	return businessRules;
}]);