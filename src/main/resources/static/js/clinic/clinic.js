var module = angular.module('clinic', []);

module.factory('clinicService', function($http) {
	
	var countries = null;
	var registerService = {
	
		register : function(clinic) {
			return $http.post('clinic', clinic);
		},
		
		countries : function() {
			return $http.get('countries', {cache: true});
		},
		
		cities : function(countryId) {
			return $http.get('cities', {params: {country: countryId}, cache: true});
		}
	};

	return registerService;
});

module.factory('clinicInitialData', function(clinicService, $q) {
	return function() {
        var countries = clinicService.countries();
 
        return $q.all([countries]).then(function(response){
            return {
            	countries: response[0].data,
            };
        });
    }
});

module.controller('clinic', function(clinicService, initialData) {
	var ctrl = this;
	
	ctrl.clinic = {};
	ctrl.clinicSearch = {};
	ctrl.clinicSearch.countries = initialData.countries;

	ctrl.register = function() {
		clinicService.register(ctrl.clinic).then(
			function(response) {
				console.info(response.data);
			},
			function(response) {
				console.info(response);
			});
	}
	
	ctrl.loadCities = function() {
		clinicService.cities(ctrl.clinicSearch.country.id).then(
				function(response) {
					ctrl.clinicSearch.cities = response.data;
				},
				function(response) {
					console.info(response);
				});
		}
});