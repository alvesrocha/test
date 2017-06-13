angular.module('form').factory('businessRules', [ 'callbackService', function(callbackService) {

	var businessRules = {};
	var jexl = require('Jexl');

	businessRules.run = function(rules, context, components) {
		for (index in rules) {
			var rule = rules[index];
			jexl.eval(rule.expression, context).then(function(rule, context, res) {
				console.log(context);
				if (res) {
					execute(rule.action, rule.params, components)
				}
			});
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
				callbackService.updateComponent(component);
			}
		}
	}

	return businessRules;
}]);