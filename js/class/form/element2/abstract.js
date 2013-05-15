
$.Class('Form.Element.Abstract', {

    PARAM_NAME_VALUE : 'value',
    PARAM_NAME_TYPE : 'type',
    PARAM_NAME_LABEL : 'label',
    PARAM_NAME_NAME : 'name',
    PARAM_NAME_DISABLED : 'disabled',
    PARAM_NAME_ERROR_MESSAGE : 'errorMessage'

}, {

    _params : null,
    _decorators : null,
    _validators : null,
    _filters : null,
    _html : null,
    _events : null,
    _errorValidator : null,

    init : function (name){
        this._params = {};
        this._decorators = [];
        this._validators = [];
        this._filters = [];
        this._events = {};

        this._params[this.constructor.PARAM_NAME_DISABLED] = false;
        this._params[this.constructor.PARAM_NAME_VALUE] = null;
        this._params[this.constructor.PARAM_NAME_LABEL] = null;
        this._params[this.constructor.PARAM_NAME_NAME] = name ? name : null;
        this._params[this.constructor.PARAM_NAME_ERROR_MESSAGE] = null;

        var fullName = this.constructor.fullName.split('.');
        this._params[this.constructor.PARAM_NAME_TYPE] = fullName[fullName.length-1].toLowerCase();
    },

    getHtml : function (){
        if (!this._html) {
            var type = this.getParam(this.constructor.PARAM_NAME_TYPE);
            this._html = $('<div class="form-element form-element-'+ type +'"></div>');
            this._html.html(this._draw());
        }
        return this._html;
    },

    onChange : function (paramName, cb, context){
        if ($.type(this._params[paramName]) === 'undefined') {
            throw Error('There is\'t param "' + paramName + '"');
        }
        if ($.type(cb) !== 'function') {
            throw Error('Callback must be function');
        }
        if (!context) {
            context = this;
        }
        this._events[paramName] = this._events[paramName] || [];
        this._events[paramName].push(cb.bind(context));
    },

    getType : function (){
        return this.getParam(this.constructor.PARAM_NAME_TYPE);
    },

    setLabel : function (label){
        this.setParam(this.constructor.PARAM_NAME_LABEL, label);
        return this;
    },

    getLabel : function (){
        return this.getParam(this.constructor.PARAM_NAME_LABEL);
    },

    setName : function (name){
        this.setParam(this.constructor.PARAM_NAME_NAME, name);
        return this;
    },

    getName : function (){
        return this.getParam(this.constructor.PARAM_NAME_NAME);
    },

    setValue : function (value){
        this.setParam(this.constructor.PARAM_NAME_VALUE, value);
        return this;
    },

    getValue : function (){
        var value =  this.getParam(this.constructor.PARAM_NAME_VALUE);

        for (var i = 0; i < this._filters.length; i++) {
            var value = this._filters[i].filter(value);
        }

        return value;
    },

    disable : function (){
        this.setParam(this.constructor.PARAM_NAME_DISABLED, true);
    },

    enable : function (){
        this.setParam(this.constructor.PARAM_NAME_DISABLED, false);
    },

    isValid : function (){
        var value =  this.getParam(this.constructor.PARAM_NAME_VALUE);
        var result = true;
        for (var i = 0; i < this._validators.length; i++) {
            if (!this._validators[i].validate(value)) {
                this._errorValidator = this._validators[i];
                result = false;
                break;
            }
        }
        if (result) {
            this._errorValidator = null;
        }
        return result;
    },

    showError : function (){
        if (this._errorValidator) {
            var errorMessage = this._errorValidator.getMessage();
            this.setParam(this.constructor.PARAM_NAME_ERROR_MESSAGE, errorMessage);
        }
        return this;
    },

    hideError : function (){
        this.setParam(this.constructor.PARAM_NAME_ERROR_MESSAGE, false);
        return this;
    },

    setParam : function (name, value){
        if ($.type(this._params[name]) !== 'undefined') {
            this._params[name] = value;
        }
        this
            ._callEvent(name)
            ._updateDecorators(name)
        ;
        return this;
    },

    getParam : function (name){
        return this._params[name];
    },

    getParams : function (){
        var result = {};
        for (var name in this._params) {
            result[name] = this._params[name];
        }
        return result;
    },

    addDecorator : function (decorator){
        if($.type(decorator.decorate) === 'function') {
            this._decorators.push(decorator);
        } else {
            throw Error('There is\'t decorate method in decorator');
        }
        return this;
    },

    addValidator : function (validator){
        if ($.type(validator.validate) === 'function') {
            this._validators.push(validator);
        } else {
            throw Error('There is\'t validate method in validator');
        }
        return this;
    },

    addFilter : function (filter){
        if ($.type(filter.filter) === 'function') {
            this._filters.push(filter);
        } else {
            throw Error('There is\'t filter method in filter');
        }
        return this;
    },

    _draw : function (){
        var result = '';
        for (var i = 0; i < this._decorators.length; i++) {
            result = this._decorators[i].decorate(result, this);
        }
        return result;
    },

    _reDraw : function (){
        if (!this._html) {
            return this;
        }
        this._html.html(this._draw());
        return this;
    },

    _callEvent : function (paramName){
        var eventsList = this._events[paramName];
        if ($.type(eventsList) !== 'array') {
            return this;
        }
        for (var i = 0; i < eventsList.length; i++) {
            try {
                eventsList[i](this.getParam(paramName), this);
            } catch (e) {
                console.error('Error in callback', eventsList[i]);
            }
        }
        return this;
    },

    _updateDecorators : function (paramName){
        if (!this._html) {
            return this;
        }
        for (var j = 0; j < this._decorators.length; j++) {
            if ($.type(this._decorators[j].update) !== 'function') {
                continue;
            }
            this._decorators[j].update(paramName, this);
        }
        return this;
    }

});

