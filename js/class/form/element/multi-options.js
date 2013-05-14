Form.Element.Abstract('Form.Element.MultiOptions', {

    _options : null,

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_TYPE] = 'multi-options';
        this._params[this.constructor.PARAM_NAME_VALUE] = [];

        this._options = {};
    },

    addOption : function (value, label, selected){
        if (!label) {
            label = value;
        }
        var item = {
            selected : Boolean(selected),
            label : label
        };
        this._options[value] = item;
        return this;
    },

    select : function (value){
        if ($.type(this._options[value]) === 'undefined') {
            return this;
        }
        this._options[value].selected = true;
        this._updateValue();
        return this;
    },

    deselect : function (value){
        if ($.type(this._options[value]) === 'undefined') {
            return this;
        }
        this._options[value].selected = false;
        this._updateValue();
        return this;
    },

    _getOption : function (value){
        if ($.type(this._options[value]) === 'undefined') {
            return null;
        }
        return this._options[value];
    },

    _updateValue : function (){
        var newValues = [];
        for (var value in this._options) {
            if (this._options[value].selected) {
                newValues.push(value);
            }
        }
        this.setValue(newValues);
        return this;
    }

});
