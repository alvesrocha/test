angular.module('form').factory('questionFactory', function() {
	
	var questionFactory = {};
	
	var inputTypesMapping = {
			text : {type:'text', template: 'js/shared/components/inputs/inputText.html'},
			integer : {type:'number', template: 'js/shared/components/inputs/inputText.html', defPattern: '[0-9]*'},
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
	
	
	questionFactory.input = function (question) {
		var input = "";
		//<input class="form-control" type="{{$ctrl.type}}" id="{{$ctrl.question.questionId}}" id="question_{{$ctrl.question.questionId}}" ng-model="$ctrl.value" ng-value="$ctrl.value" ng-change="$ctrl.change()" ng-model-options="{updateOn: 'blur', allowInvalid: true}"/>
		if(question.questionType === 'text' || question.questionType === 'integer' || question.questionType === 'real') {
			input +="<input " +
					"class=\"form-control\" " +
					"type=\"{{$ctrl.type}}\" " +
					"id=\"question_{{$ctrl.question.questionId}}\" " +
					"ng-model=\"$ctrl.value\" " +
					"ng-value=\"$ctrl.value\" " +
					"ng-change=\"$ctrl.change()\" " +
					"ng-model-options=\"{updateOn: 'blur'}\"";
			if(question.pattern !== undefined) {
				input +=" pattern=\"" + question.pattern + "\"";
			}		
		}else if(question.questionType === 'dropdown') {
			//<select class="form-control" id="{{$ctrl.question.questionId}}" ng-model="$ctrl.value" ng-change="$ctrl.change()" ng-options="label.labelDesc for label in $ctrl.question.labels"></select>
			input +="<select " +
			"class=\"form-control\" " +
			"id=\"question_{{$ctrl.question.questionId}}\" " +
			"ng-model=\"$ctrl.value\" " +
			"ng-change=\"$ctrl.change()\" " +
			"ng-options=\"label.labelDesc for label in $ctrl.question.labels\"";
		}
		
		if(question.requiered !== undefined){
			input +=" required=\"" + question.requiered + "\"";
		}
		input +="/>";
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