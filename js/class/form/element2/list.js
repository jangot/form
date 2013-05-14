Form.Element.Abstract('Form.Element.List', {

    PARAM_NAME_OPTIONS : 'options'

}, {

    init : function (name){
        this._super(name);

        this._params[this.constructor.PARAM_NAME_OPTIONS] = {};
    },

    addOption : function (value, label){
        if (!label) {
            label = value;
        }
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        options[value] = {
            label : label,
            value : value
        }
        this.setParam(this.constructor.PARAM_NAME_OPTIONS, options);
        this._reDraw();
        return this;
    },

    getOptions : function (){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        var result = [];
        for (var value in options) {
            result.push({
                value : value,
                label : options[value].label,
                selected : false
            })
        }
        return result;
    }

});
