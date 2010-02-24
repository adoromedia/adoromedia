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
		invalidRulesToShowPerValidator = config.invalidRulesToShowPerValidator || 1,
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
		var id = [eventType, fvId].join(".");
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
		var id = [eventType, fvId].join(".");
        $(document).unbind(id, eventHandler);
    }
	
	this.addValidator = function(fieldName, rules) {
		var $field, validator;		
		if(arguments.length === 0) return me;
		if(typeof fieldName !== "string") return me;
		$field = $formNode.find("input[name='"+fieldName+"']");
		if($field.length === 0) return me;
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
		
		return validator;
	}
	
	function addRulesToValidator(validator, rules) {
		for(var i = 0; i<rules.length;i++) {
			validator.addRule(rules[i]);
		}
	}
	
	this.removeValidator = function(fieldName) {
		if(arguments.length === 0) return me;
		if(typeof fieldName !== "string") return me;
		var validatorIndex = me.getValidatorIndex(fieldName);
		if(validatorIndex === null) return me;
		var validators = me.getValidators();
		delete validators[validatorIndex];
		validators.splice(validatorIndex, 1);
		return me;
	}

	function validate(fieldsArray, clearErrorsBoolean) {
		
		$(document).trigger(["onFormValidateStart", fvId].join("."), [me]);
		
		if(clearErrorsBoolean !== false) this.clearErrors();
		
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
			$(document).trigger(["onFormSuccess",fvId].join("."), [me]);
		}
		else {
			$(document).trigger(["onFormFail", fvId].join("."), [me]);
		}
		
		$(document).trigger(["onFormValidateComplete", fvId].join("."), [me]);
		
		return allValid;
	}
	
	this.getErrors = function() {
		var errors = [],
			validators = me.getValidators(),
			rules = null,
			rule = null,
			validator = null,
			count = 0;
		
		for(var i = 0;i<validators.length;i++) {
			validator = validators[i];
			rules = validator.getRules();
			for(var j = 0, count = 0; j < rules.length; j++) {
				rule = rules[j];
				if(rule.hasError && (count < invalidRulesToShowPerValidator)) {
					errors.push({
						fieldName: validator.fieldName,
						message: rule.message						
					})
					count++;
				}
			}
			
		}
		return errors;
	}
	
	this.getValidators = function() {
		return validators;
	}
	
	this.getValidator = function(fieldName) {
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
	
	this.getValidatorIndex = function(fieldName) {
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
	
	this.clearErrors = function() {
		var validators = me.getValidators(),
			rules = null,
			rule = null,
			validator = null;
		
		for(var i = 0;i<validators.length;i++) {
			validator = validators[i];
			rules = validator.getRules();
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
		validate: function(yoyo) {
			$(document).trigger([this.fieldName,"onFieldValidateStart", fvId].join("."));		
			
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
					$(document).trigger([fvId, this.fieldName, "onFieldFail"].join("."), [me, this.$field]);
				}
			}
			
			if(allValid) {
				$(document).trigger([this.fieldName, "onFieldSuccess",fvId].join("."), [me, this.$field]);
			}
			
			$(document).trigger([this.fieldName, "onFieldValidateComplete", fvId].join("."), [me, this.$field]);
			return allValid;
		}
	}
	
	// public members
	this.addEventHandler = addEventHandler;
	this.validate = validate;
	
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