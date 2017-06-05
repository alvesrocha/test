var module = angular.module('form', []);


module.factory('dataFactory', ['$http', function($http) {
	
	var urlBase = '/api';
    var dataFactory = {};
    
    var form;
    var rules;

    dataFactory.getForm = function () {
    	if(form == null){
    		form = [
    			{
    				groupId : 1,
    				groupDesc : 'Group 1',
    				questions : [ {
    					questionName : 'A1',
    					questionId : 1,
    					questionType : 'text',
    					questionDesc : 'Question 1'
    				}, {
    					questionName : 'B1',
    					questionId : 2,
    					questionType : 'dropdown',
    					questionDesc : 'Question 2',
    					labels : [ {
    						labelId : 1,
    						labelValue : '0',
    						labelDesc : 'label 1'
    					}, {
    						labelId : 2,
    						labelValue : '1',
    						labelDesc : 'label 2'
    					} ]
    				} ]
    			},
    			{
    				groupId : 1,
    				groupDesc : 'Group 2',
    				questions : [ {
    					questionName : 'A2',
    					questionId : 1,
    					questionType : 'text',
    					questionDesc : 'Question 3'
    				}, {
    					questionName : 'B2',
    					questionId : 2,
    					questionType : 'dropdown',
    					questionDesc : 'Question 4',
    					labels : [ {
    						labelId : 1,
    						labelValue : '0',
    						labelDesc : 'label 1'
    					}, {
    						labelId : 2,
    						labelValue : '1',
    						labelDesc : 'label 2'
    					} ]
    				} ]
    			},
    			{
    				groupId : 1,
    				groupDesc : 'Group 3',
    				questions : [ {
    					questionName : 'A3',
    					questionId : 1,
    					questionType : 'text',
    					questionDesc : 'Question 5'
    				}, {
    					questionName : 'B3',
    					questionId : 2,
    					questionType : 'dropdown',
    					questionDesc : 'Question 6',
    					labels : [ {
    						labelId : 1,
    						labelValue : '0',
    						labelDesc : 'label 1'
    					}, {
    						labelId : 2,
    						labelValue : '1',
    						labelDesc : 'label 2'
    					} ]
    				} ]
    			}
    		];
    	}
        return form;
    };

    return dataFactory;
	
}]);




module.controller('form', ['dataFactory', function (dataFactory) {
	var ctrl = this;
	ctrl.message = 'Form loading...';

	ctrl.groups = dataFactory.getForm();
	
}]);