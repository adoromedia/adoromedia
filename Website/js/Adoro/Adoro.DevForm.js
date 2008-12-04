if (typeof Adoro !== "object") { var Adoro = {}; }
Adoro.DevForm = {};
$(document).ready(function(){ 
	Adoro.DevForm = new (function(){
		// get form to validate from DOM
		var devForm = document.getElementById("devForm");
		if(devForm === null) return;
		
		// create a new form to validate
		var form = new Adoro.FormValidator(devForm);
		
		// add validators
		form.addValidator("fullName",[{
			method: Adoro.FormRules.notEmpty,
			message: "Full name is required."
		},{
			method: Adoro.FormRules.emailAddress,
			message: "Full name for some reason should look like an email address."
		}]).addValidator("age",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in your age."
		}]).addValidator("terms",[{
			method: Adoro.FormRules.minChecked, 
			params: {
				minChecked: 1
			},
			message: "Terms need to be agreed."
		}]).addValidator("day01",[{
			method: Adoro.FormRules.notEmpty,
			message: "Day 1 is required."
		}]).addValidator("month01",[{
			method: Adoro.FormRules.notEmpty,
			message: "Month 1 is required."
		}]).addValidator("year01",[{
			method: Adoro.FormRules.notEmpty,
			message: "Year 1 is required."
		}]).addValidator("searchEngine",[{
			method: Adoro.FormRules.minChecked,
			params: {
				minChecked: 2
			},
			message: "You must pick at least 2 search engines."
		}]).addValidator("day02",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in day 02."
		}]).addValidator("month02",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in month 02."
		}]).addValidator("year02",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in year 02."
		}]).addValidator("gender",[{
			method: Adoro.FormRules.minChecked, 
			params: {
				minChecked: 1
			},
			message: "You must fill select a gender."
		}]).addValidator("friends",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must choose a friend."
		}]);	
		
		// add a contextual group
		// first param is the id of the submit button in the DOM that triggers the group
		// second param is the array of field names to contextually validate
		form.addGroup("contextualSubmitButton", ["day01", "month01", "year01"]);
		
		// override the message for a validator - useful if you override a default from server side text etc
		// this line could then be in the markup
		form.setMessage("fullName", "notEmpty", "Custom is not empty message");
		
		// remove a validator - can't think why you need it yet but surely useful
		// if you pass in just the first param the whole validator will be removed
		// if you pass in ruleKey(s) then those particular rule(s) will be removed
		form.removeValidator("fullName", ["emailAddress"]);		
	});
});