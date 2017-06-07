function GroupController() {
	var ctrl = this;

	ctrl.updateQuestion = function(question, values) {
		ctrl.onUpdate({question: question, values: values});
	}

}

angular.module('form').component('group', {
	templateUrl : 'js/shared/components/group/group.html',
	controller : GroupController,
	bindings : {
		group : '<',
		onUpdate: '&'
	}
});