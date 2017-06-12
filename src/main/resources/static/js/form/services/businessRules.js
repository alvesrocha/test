angular.module('form').factory('businessRules', function() {

	var businessRules = {};
	var jexl = require('Jexl');

	businessRules.run = function(rules, context, components) {
		for (index in rules) {
			var rule = rules[index];
			jexl.eval(rule.expression, context).then(function(res) {
				if (res) {
					execute(rule.action, rule.params, components)
				}
			});
		}
	}

	function execute(action, params, components) {
		switch (action) {
		case 'excludeQuestions': excludeQuestions(params, components);
			break;
		case 'includeQuestions': includeQuestions(params, components);
			break;
		}
	}

	function excludeQuestions(params, components) {
		console.log("exclude " + params);
		
		/*var context = {'form' : components};
		jexl.eval("form[.questions].questions[.questionName == 'A1']", context).then(function(question) {
			console.log(question);
			question.disable = true;
		});
		*/
		components.get('A2').disabled = true;
	}
	
	function includeQuestions(params, formDefinition) {
		console.log("include " + params);
		jexl.eval('questions[.questionName ==' + params[0] +']', context).then(function(question) {
			console.log(question);
		});
	}

	return businessRules;
});