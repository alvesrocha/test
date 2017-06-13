module.controller('form', ['dataFactory', 'businessRules', function (dataFactory, businessRules) {
	var ctrl = this;
	ctrl.message = 'Form loading...';

	ctrl.data = dataFactory.getForm();
	
	
	ctrl.updateQuestion = function (question, values) {
		dataFactory.addQuestionAnswers(question.questionName, values);
		ctrl.runRules();
	}
	
	ctrl.runRules = function () {
		var context = {};
		for(q in ctrl.data.questions) {
			context[q] = ctrl.data.questions[q].answers;
		}
		businessRules.run(ctrl.data.rules, context, ctrl.data.questions);
	}
}]);