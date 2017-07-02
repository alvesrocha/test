angular.module('form').factory('dataFactory', [ '$http', function($http) {

	var urlBase = '/api';
	var dataFactory = {};

	var form;

	dataFactory.getForm = function() {
		if (form == null) {
			form = {
				definition : [ {
					groupId : 1,
					groupDesc : 'Group 1',
					questions : [ {
						questionName : 'A1',
						questionId : 1,
						questionType : 'integer',
						questionDesc : 'Question 1',
						max : 4,
						min : 1,
						required : true,
						disabled : false,
						answers : []
					}, {
						questionName : 'B1',
						questionId : 2,
						questionType : 'dropdown',
						questionDesc : 'Question 2',
						disabled : false,
						answers : [],
						labels : [ {
							labelId : 1,
							labelValue : '0',
							labelDesc : 'label 1',
							disabled : false
						}, {
							labelId : 2,
							labelValue : '1',
							labelDesc : 'label 2',
							disabled : false
						} ]
					} ]
				}, {
					groupId : 1,
					groupDesc : 'Group 2',
					questions : [ {
						questionName : 'A2',
						questionId : 3,
						questionType : 'text',
						questionDesc : 'Question 3',
						disabled : false,
						answers : []
					}, {
						questionName : 'B2',
						questionId : 4,
						questionType : 'dropdown',
						questionDesc : 'Question 4',
						disabled : false,
						answers : [],
						labels : [ {
							labelId : 1,
							labelValue : '0',
							labelDesc : 'label 1',
							disabled : false
						}, {
							labelId : 2,
							labelValue : '1',
							labelDesc : 'label 2',
							disabled : false
						} ]
					} ]
				}, {
					groupId : 1,
					groupDesc : 'Group 3',
					questions : [ {
						questionName : 'A3',
						questionId : 5,
						questionType : 'text',
						questionDesc : 'Question 5',
						max : 10,
						min : 3,
						required : true,
						pattern : '[A-Za-z]+',
						disabled : false,
						answers : []
					}, {
						questionName : 'B3',
						questionId : 6,
						questionType : 'dropdown',
						questionDesc : 'Question 6',
						disabled : false,
						answers : [],
						labels : [ {
							labelId : 1,
							labelValue : '0',
							labelDesc : 'label 1',
							disabled : false
						}, {
							labelId : 2,
							labelValue : '1',
							labelDesc : 'label 2',
							disabled : false
						} ]
					} ]
				}],
				rules :[
					{
						expression :  {"==":[1, 1]}, action : "includeQuestions", params : ["A1", "B1", "A2", "B2", "A3", "B3"] 
					},
					{
						expression : {"in":["10", {"var":"A1"}]}, action : "excludeQuestions", params : ["A2"] 
					}
				],
			}
			
			form.questions = {};
			for(ig in form.definition) {
				for(iq in form.definition[ig].questions) {
					form.questions[form.definition[ig].questions[iq].questionName] = form.definition[ig].questions[iq];
				}
			}
		}
		return form;
	}
	
	dataFactory.addQuestionAnswers = function (questionName, answers) {
		form.questions[questionName].answers = answers;
	}

	return dataFactory;

} ]);