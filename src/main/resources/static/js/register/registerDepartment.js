var moduleDept = angular.module('registerDept', []);

module.factory('registerService', [ '$http', function($http) {
	var registerService = {
		register : function(department, callback) {
			$http.post('dept', department).then(function(response) {
				callback && callback(response.data);
			});
		}
	};

	return registerService;
} ]);

module.controller('registerDept', [ 'registerService', function(registerService) {
	var ctrl = this;

	ctrl.department = {};

	ctrl.register = function() {
		registerService.register(ctrl.department, function(data) {
			console.info(data);
		})
	}
} ]);