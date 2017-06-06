function QuestionController() {
	var ctrl = this;

	// it should be into a Service (shared for all controllers)
	ctrl.inputTypesMapping = {
		text : {type:'text', template: 'js/shared/components/inputs/inputText.html'},
		integer : {type:'number', template: 'js/shared/components/inputs/inputText.html', defPattern: '\\d*'},
		real : {type:'number', template: 'js/shared/components/inputs/inputText.html'},
		dropdown : {template: 'js/shared/components/inputs/dropdown.html'},
	};

	ctrl.change = function() {

	}

	ctrl.$onInit = function() {
		ctrl.value = '';
		if(ctrl.inputTypesMapping[ctrl.question.questionType] !== undefined) {
			ctrl.template = ctrl.inputTypesMapping[ctrl.question.questionType].template;
			ctrl.type = ctrl.inputTypesMapping[ctrl.question.questionType].type;
		}else {
			//default
			ctrl.template = ctrl.inputTypesMapping.text.template;
			ctrl.type = 'text';
		}
		

	}

}

angular.module('form').component('question', {
	templateUrl : 'js/shared/components/question.html',
	controller : QuestionController,
	bindings : {
		question : '<'
	}
});