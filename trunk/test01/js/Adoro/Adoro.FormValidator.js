/**
* @fileOverview Adoro FormValidator object
* @name FormValidator
*/
/**
* @namespace Root namespace for holding all Adoro objects
* @name Adoro
*/
var Adoro = Adoro || {};
/**
* Create a new form validator object
* @class Represents a form validator object
* @constructor
* @name Adoro.FormValidator
* @param {HTMLElement} form as DOM reference
* @param {Object} options
*/
Adoro.FormValidator = function(formNode, options) {
	var me = this,
		$formNode = $(formNode),
		config = options || {},
		validators = [],
		fvId = new Date().getTime(),
		allowedEvents = [
			"onFormValidateStart",
			"onFormValidateComplete",
			"onFormFail",
			"onFormSuccess",
			"onFieldValidateStart", /* have to be namespaced via field name */
			"onFieldValidateComplete", /* have to be namespaced via field name */
			"onFieldFail", /* have to be namespaced via field name */
			"onFieldSuccess", /* have to be namespaced via field name */
		];
		
	/**
	 * add a custom event to the form validator
	 * @function
	 * @public
	 * @param {string} eventType This can be either
	 * "onFormValidateStart",
	 * "onFormValidateComplete",
	 * "onFormFail",
	 * "onFormSuccess",
	 * "onFieldValidateStart",
	 * "onFieldValidateComplete",
	 * "onFieldFail",
	 * "onFieldSuccess"
	 * @param {function} eventHandler This is the callback for the event
	 */
	function addEventHandler(eventType, eventHandler) {
		if(!eventType || !eventHandler) return;
		var id = [fvId, eventType].join(".");
        $(document).bind(id, eventHandler);
    }

	/**
	 * remove a custom event from the form validator
	 * @function
	 * @public
	 * @param {string} eventType This can be either
	 * "onFormValidateStart",
	 * "onFormValidateComplete",
	 * "onFormFail",
	 * "onFormSuccess",
	 * "onFieldValidateStart",
	 * "onFieldValidateComplete",
	 * "onFieldFail",
	 * "onFieldSuccess"
	 * @param {function} eventHandler This is the callback for the event
	 */
    function removeEventHandler(eventType, eventHandler) {
		if(!eventType || !eventHandler) return;
		var id = [fvId, eventType].join(".");
        $(document).unbind(id, eventHandler);
    }
	
	/**
	 * add a validator to the form validator object
	 * @function
	 * @public
	 * @param {string} fieldName The name of the field to validate
	 * @param {rules[{rule}]} rules An array of rule objects to run against the field
	 * a rule object looks like {method: function() {}, message: "In string format etc"}
	 * @example
	 * var fv = new Adoro.FormValidator();
	 * fv.addValidator("username", [{
	 * 	method: function(){},
	 * 	message: "Username is required"
	 * },{
	 * 	method: function(){},
	 * 	message: "Username must letters"
	 * }]);
	 * @return {Object} The instance of the validator or null
	 */	
	function addValidator(fieldName, rules, options) {
		var $field, validator = null;		
		if(arguments.length === 0) return validator;
		if(typeof fieldName !== "string") return validator;
		$field = $formNode.find("input[name='"+fieldName+"']");
		if($field.length === 0) return validator;
		if(!$.isArray(rules)) rules = [];
		validator = me.getValidator(fieldName);
		
		// if the validator exists then add any rules to it
		if(validator) {
			if(rules.length !== 0) {
				addRulesToValidator(validator, rules);
			}
		}
		// else create a new validator
		else {
			validator = new Validator($field, fieldName);
			addRulesToValidator(validator, rules);
			validators.push(validator);
		}	
		
		for(var key in options) {
			addEventHandler([fieldName, key].join("."), options[key]);
		}
		
		// for each option key
			//addEventHandler(fieldName+key, options[key]);
		
		return validator;
	}
	
	function addRulesToValidator(validator, rules) {
		for(var i = 0; i<rules.length;i++) {
			validator.addRule(rules[i]);
		}
	}
	
	function removeValidator(fieldName) {
		if(arguments.length === 0) return me;
		if(typeof fieldName !== "string") return me;
		var validatorIndex = me.getValidatorIndex(fieldName);
		if(validatorIndex === null) return me;
		var validators = me.getValidators();
		delete validators[validatorIndex];
		validators.splice(validatorIndex, 1);
		return me;
	}

	/**
	 * validate the form
	 * @function
	 * @public
	 * @param {array[string]} fieldsArray Array of field names in string format to validate
	 * @param {boolean} clearErrors If false will clear any existing errors, otherwise it wont - default is true
	 * @return {boolean} False when there are errors, otherwise True
	 */
	function validate(fieldsArray, clearErrors) {
		
		$(document).trigger([fvId,"onFormValidateStart"].join("."), [me]);
		
		if(clearErrors !== false) this.clearErrors();
		
		if(!fieldsArray || !$.isArray(fieldsArray)) fieldsArray = [];
		
		var allValid = true,
			validators = me.getValidators(),
			valid = true;
			
		for(var i = 0;i<validators.length;i++) {
			// only validate specific fields passed in as fieldsArray
			if(fieldsArray.length > 0 && ($.inArray(validators[i].fieldName, fieldsArray) == -1) ) continue;	
			valid = validators[i].validate();
			
			if(!valid) {
				allValid = false;	
			}
		}
		
		if(allValid) {
			$(document).trigger([fvId,"onFormSuccess"].join("."), [me]);
		}
		else {
			$(document).trigger([fvId,"onFormFail"].join("."), [me]);
		}
		
		$(document).trigger([fvId,"onFormValidateComplete"].join("."), [me]);
		
		return allValid;
	}
	
	function getErrors() {
		var errors = [],
			validators = me.getValidators(),
			rules = null,
			rule = null,
			validator = null,
			count = 0;
		
		for(var i = 0;i<validators.length;i++) {
			validator = validators[i];
			rules = validator.getInvalidRules();
			for(var j = 0, count = 0; j < rules.length; j++) {
				rule = rules[j];
				//if(count < invalidRulesToShowPerValidator) {
				errors.push({
					fieldName: validator.fieldName,
					message: rule.message						
				})
				count++;
				//}
			}
			
		}
		return errors;
	}
	
	function getValidators() {
		return validators;
	}
	
	function getValidator(fieldName) {
		var o = null, validator;
		if(arguments.length === 0) return o;
		if(typeof fieldName !== "string") return o;
		for(var i = validators.length-1; i>=0; i--) {
			validator = validators[i];
			if(validator.fieldName === fieldName) {
				o = validator;
				break;
			}
		}
		return o;
	}
	
	function getValidatorIndex(fieldName) {
		var o = null,
			validator = null,
			i = validators.length-1;
		if(arguments.length === 0) return o;
		if(typeof fieldName !== "string") return o;
		for(i; i>=0; i--) {
			validator = validators[i];
			if(validator.fieldName === fieldName) {
				o = i;
				break;
			}
		}
		return o;
	}
	
	function clearErrors() {
		var validators = me.getValidators(),
			rules = null,
			rule = null,
			validator = null;
		
		for(var i = 0;i<validators.length;i++) {
			validator = validators[i];
			rules = validator.getInvalidRules();
			for(var j = 0; j < rules.length; j++) {
				rules[j].hasError = false;
			}
		}
	}
		
	function Validator($field, fieldName, rules) {
		var me = this;
		this.$field = $field;
		this.fieldName = fieldName;
		this.rules = rules || [];
	}
	Validator.prototype = {
		addRule: function(obj) {
			var rule = null;
			if(arguments.length === 0) return this;
			if(typeof obj.method !== "function") return this;
			if(typeof obj.message !== "string") return this;
			if(typeof obj.params !== "object") obj.params = {};
			rule = new Adoro.FormValidator.Rule(obj.method, obj.message, obj.params);
			this.rules.push(rule);
			return this;
		},
		removeRule: function(method) {
			var rules = this.getRules(),
				i = rules.length-1;
			if(!rules) return this;
			if(!method) return this;
			for(i; i>=0; i--) {
				if(rules[i].method === method) {
					delete rules[i];
					rules.splice(i, 1);
					break;
				}
			}
			return this;	
		},
		getRules: function() {
			return this.rules || null;
		},
		getInvalidRules: function() {
			var invalidRules = [],
				rules = this.getRules();
				
			for(var i = 0; i < rules.length; i++) {
				if(rules[i].hasError) {
					invalidRules.push(rules[i]);
				}
			}
			return invalidRules;
		},
		validate: function(yoyo) {
			$(document).trigger([fvId, this.fieldName,"onFieldValidateStart"].join("."), [this.$field]);		
			
			var rules = this.getRules(),
				i = 0,
				rulesLength = rules.length,
				rule = null,
				valid = true,
				allValid = true;
			if(rulesLength === 0) return allValid;
			for(i; i<rulesLength; i++) {
				rule = rules[i];
				valid = rule.method.call(this.$field, rule.params);
				if(typeof valid === "undefined") valid = true;
				if(!valid) {
					allValid = false;
					rule.setErrorState(true);				
				}
			}
			
			if(allValid) {
				$(document).trigger([fvId,this.fieldName, "onFieldSuccess"].join("."), [this.$field]);
			}
			else {
				$(document).trigger([fvId, this.fieldName, "onFieldFail"].join("."), [this.$field, this.getInvalidRules()]);
			}
			
			$(document).trigger([fvId,this.fieldName, "onFieldValidateComplete", fvId].join("."), [this.$field]);
			return allValid;
		}
	}
	

	// public members
	this.addEventHandler = addEventHandler;
	this.removeEventHandler = removeEventHandler;
	this.addValidator = addValidator;
	this.removeValidator = removeValidator;
	this.validate = validate;
	this.getErrors = getErrors;
	this.getValidators = getValidators;
	this.getValidator = getValidator;
	this.getValidatorIndex = getValidatorIndex;
	this.clearErrors = clearErrors;
}
Adoro.FormValidator.Rule = function(method, message, params) {
	this.method = method;
	this.message = message;
	this.params = params || {};
}
Adoro.FormValidator.Rule.prototype = {
	hasError: false,
	setErrorState: function(value) {
		if(typeof value !== "boolean") return;
		this.hasError = value;
	}
}