Form.Element.Abstract('Form.Element.List', {

    PARAM_NAME_OPTIONS : 'options'

}, {

    init : function (name){
        this._super.apply(this, arguments);

        this._params[this.constructor.PARAM_NAME_OPTIONS] = {};
    },

    setValue : function (values){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        for (var value in options) {
            options[value].selected = false;
        }
        for (var i in values) {
            if (options[values[i]]) {
                options[values[i]].selected = true;
            }
        }

        this.setParam(this.constructor.PARAM_NAME_VALUE, this._getCustomValue());
        return this;
    },

    addOption : function (value, label, selected){
        if (!label) {
            label = value;
        }
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        options[value] = {
            label : label,
            value : value,
            selected : Boolean(selected)
        }
        this
            .setParam(this.constructor.PARAM_NAME_OPTIONS, options)
            .setParam(this.constructor.PARAM_NAME_VALUE, this._getCustomValue())
        ;
        return this;
    },

    removeOption : function (value){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        delete options[value];
        this
            .setParam(this.constructor.PARAM_NAME_OPTIONS, options)
            .setParam(this.constructor.PARAM_NAME_VALUE, this._getCustomValue())
        ;
        return this;
    },

    getOptions : function (){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        var result = [];
        for (var value in options) {
            result.push({
                value : value,
                label : options[value].label,
                selected : options[value].selected
            })
        }
        return result;
    },

    select : function (value){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        if (!options[value]) {
            return this;
        }
        options[value].selected = true;
        this
            .setParam(this.constructor.PARAM_NAME_VALUE, this._getCustomValue())
        ;

        return this;
    },

    deselect : function (value){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        if (!options[value]) {
            return this;
        }
        options[value].selected = false;
        this
            .setParam(this.constructor.PARAM_NAME_VALUE, this._getCustomValue())
        ;
        return this;
    },

    _getCustomValue : function (){
        var result = [];
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        for (var value in options) {
            if (options[value].selected) {
                result.push(value);
            }

        }
        return result;
    }

});
