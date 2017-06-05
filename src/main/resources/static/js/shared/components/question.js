function QuestionController() {
  var ctrl = this;
  
  //it should be into a Service (shared for all controllers)
  ctrl.types = {
		  text : 'js/shared/components/inputs/inputText.html',
		  dropdown : 'js/shared/components/inputs/dropdown.html'
  };
  
  //It should came from the parent
  /*
  ctrl.obj = {
		  questionName : 'A', questionId : 1, questionType : 'dropdown', labels : [{labelId : 1, labelValue : '0', labelDesc : 'label 1'}, {labelId : 2, labelValue : '1', labelDesc : 'label 2'}]
  };
  */
  //ctrl.template = ctrl.obj.questionType === 'text' ? ctrl.types.text : ctrl.obj.questionType === 'dropdown' ? ctrl.types.dropdown : '';
  
  ctrl.value = '';

}

angular.module('form').component('question', {
  templateUrl: 'js/shared/components/question.html',
  controller: QuestionController,
  bindings: {
	  question: '<'
  }
});