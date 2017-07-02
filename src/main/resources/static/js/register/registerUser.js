var module = angular.module('registerUser', []);

module.factory('registerService', [ '$http', function($http) {
	var registerService = {
		register : function(user, callback) {
			$http.post('register', user).then(function(response) {
				callback && callback(response.data);
			});
		}
	};

	return registerService;
} ]);

module.controller('registerUser', [ 'registerService', function(registerService) {
	var ctrl = this;

	ctrl.user = {};

	ctrl.register = function() {
		registerService.register(ctrl.user, function(data) {
			console.info(data);
		})
	}
} ]);