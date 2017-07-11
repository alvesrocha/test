var module = angular.module('clinic', []);

module.factory('registerClinicService', [ '$http', function($http) {
	
	var countries = null;
	var registerService = {
	
		register : function(clinic, callback) {
			$http.post('clinic', clinic).then(function(response) {
				callback && callback(response.data);
			});
		},
		
		countries : function(callback) {
			if(countries == null){
				$http.get('countries').then(function(response) {
					callback && callback(response.data);
				});
			}else{
				callback && callback(countries);
			}
		}
	};

	return registerService;
} ]);

module.controller('clinic', [ 'registerClinicService', function(registerService) {
	var ctrl = this;
	
	ctrl.clinic = {};
	ctrl.countries;
	
	ctrl.register = function() {
		registerService.register(ctrl.clinic, function(data) {
			console.info(data);
		})
	}
	
	ctrl.loadCountries = function() {
		registerService.countries(function(data) {
			console.debug(data);
			ctrl.countries = data;
		})
	}
	
	ctrl.loadCountries();
	
} ]);