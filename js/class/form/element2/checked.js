Form.Element.Single('Form.Element.Checked', {

    PARAM_NAME_CHECKED : 'checked',

    TYPE_CHECKBOX : 'checkbox',
    TYPE_RADIO : 'radio'

}, {

    init : function (){
        this._super.apply(this, arguments);

        this._params[this.constructor.PARAM_NAME_CHECKED] = false;
        this._params[this.constructor.PARAM_NAME_TYPE] = this.constructor.TYPE_CHECKBOX;
    },

    getValue : function (){
        var checked = this.getParam(this.constructor.PARAM_NAME_CHECKED);
        if (checked) {
            return this._super();
        }
        return null;
    },

    setChecked : function (checked){
        this.setParam(this.constructor.PARAM_NAME_CHECKED, Boolean(checked));
        return this;
    },

    setType : function (type){
        if (type !== this.constructor.TYPE_CHECKBOX && type !== this.constructor.TYPE_RADIO) {
            return this;
        }
        this.setParam(this.constructor.PARAM_NAME_TYPE, type);
        return this;
    }



});
