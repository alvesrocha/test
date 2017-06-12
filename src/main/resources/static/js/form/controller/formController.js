module.controller('form', ['dataFactory', 'businessRules', function (dataFactory, businessRules) {
	var ctrl = this;
	ctrl.message = 'Form loading...';

	ctrl.values = {};
	ctrl.data = dataFactory.getForm();
	
	
	ctrl.updateQuestion = function (question, values) {
		ctrl.values[question.questionName] = values;
		ctrl.runRules();
	}
	
	ctrl.runRules = function () {
		businessRules.run(ctrl.data.rules, ctrl.values, ctrl.data.questionsMap);
	}
}]);