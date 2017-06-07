angular.module('form').factory('questionFactory', function() {
	
	var questionFactory = {};
	
	var inputTypesMapping = {
			text : {type:'text', template: 'js/shared/components/inputs/inputText.html'},
			integer : {type:'number', template: 'js/shared/components/inputs/inputText.html', defPattern: '\\d*'},
			real : {type:'number', template: 'js/shared/components/inputs/inputText.html'},
			dropdown : {template: 'js/shared/components/inputs/dropdown.html'},
		};

	questionFactory.convertType = function (type) {
		if(inputTypesMapping[type] !== undefined) {
			return inputTypesMapping[type].type;
		}
		return 'text';
	}
	
	questionFactory.template = function (type) {
		if(inputTypesMapping[type] !== undefined) {
			return inputTypesMapping[type].template;
		}
		return inputTypesMapping.text.template;
	}
	
	return questionFactory;
});


function QuestionController(questionFactory, validatorFactory) {
	var ctrl = this;
	
	ctrl.change = function() {
		ctrl.valid = validatorFactory.validate(ctrl.question, ctrl.value);
		if(ctrl.valid) {
			ctrl.onUpdate({question: ctrl.question, values: [ctrl.value]});
		}
	}

	ctrl.$onInit = function() {
		ctrl.value = '';
		ctrl.type = questionFactory.convertType(ctrl.question.questionType);
		ctrl.template = questionFactory.template(ctrl.question.questionType);
		ctrl.valid = true;
	}

}

angular.module('form').component('question', {
	templateUrl : 'js/shared/components/question/question.html',
	controller : QuestionController,
	bindings : {
		question : '<',
		onUpdate: '&'
	}
});