function GroupController() {
  var ctrl = this;
  //for now the group doesn't need any behaviour
}

angular.module('form').component('group', {
  templateUrl: 'js/shared/components/group.html',
  controller: GroupController,
  bindings: {
	  group: '<'
  }
});