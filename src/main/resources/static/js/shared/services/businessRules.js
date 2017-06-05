angular.module('form').factory('businessRules', ['$http', function($http) {
  
	
	
	
	
	
	var json = {
        Person: {
            type: "object",
            properties: {
                FirstName: { type: "string", title: "First name", required: true, maxLength: 15 },
                LastName: { type: "string", title: "Last name", required: true, maxLength: 15 },
                Contact: {
                    type: "object",
                    properties: {
                        Email: {
                            type: "string", title: "Email",
                            required: true,
                            maxLength: 100,
                            email: true
                        }
                    }
                }
            }
        }
    };
    return new FormSchema.JsonSchemaRuleFactory(json).CreateRule("Main");
}]);