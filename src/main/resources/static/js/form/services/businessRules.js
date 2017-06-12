angular.module('form').factory('businessRules', function() {

	var businessRules = {};
	var jexl = require('Jexl');

	businessRules.run = function(rules, context, formDefinition) {
		for (index in rules) {
			var rule = rules[index];
			jexl.eval(rule.expression, context).then(function(res) {
				if (res) {
					execute(rule.action, rule.params, formDefinition)
				}
			});
		}
	}

	function execute(action, params, formDefinition) {
		switch (action) {
		case 'excludeQuestions': excludeQuestions(params, formDefinition);
			break;
		case 'includeQuestions': includeQuestions(params, formDefinition);
			break;
		}
	}

	function excludeQuestions(params, formDefinition) {
		console.log("exclude " + params);
		//var context = {'form' : formDefinition};
		var context = context = {form : [{questions : [1,2,3]}]};
		jexl.eval("form[.questions]", context).then(function(question) {
			console.log(question);
		});
	}
	
	function includeQuestions(params, formDefinition) {
		console.log("include " + params);
		jexl.eval('questions[.questionName ==' + params[0] +']', context).then(function(question) {
			console.log(question);
		});
	}

	return businessRules;
});