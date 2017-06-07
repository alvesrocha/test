module.controller('form', ['dataFactory', function (dataFactory) {
	var ctrl = this;
	ctrl.message = 'Form loading...';

	ctrl.values = {};
	ctrl.data = dataFactory.getForm();
	
	
	ctrl.updateQuestion = function (question, values) {
		ctrl.values[question.questionId] = values;
	}
	
}]);