Form.Element.SingleValue('Form.Element.CheckedItem', {
    PARAM_NAME_CHECKED : 'checked',

    TYPE_CHECKBOX : 'checkbox',
    TYPE_RADIO : 'radio'
}, {

    _checked : null,
    _value : null,

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_CHECKED] = false;

        this.setType(this.constructor.TYPE_CHECKBOX);
    },

    setValue : function (value){
        this._value = value;
        return this;
    },

    setChecked : function (checked){
        checked = Boolean(checked);
        this.setParam(this.constructor.PARAM_NAME_CHECKED, checked);
        var newValue = checked ? this._value : false;
        this.setParam(this.constructor.PARAM_NAME_VALUE, newValue);
        return this;
    },

    getChecked : function (){
        return this.getParam(this.constructor.PARAM_NAME_CHECKED);
    },

    setType : function (type){
        if (type != this.constructor.TYPE_CHECKBOX && type != this.constructor.TYPE_RADIO) {
            throw Error('Invalid type')
        }
        this.setParam(this.constructor.PARAM_NAME_TYPE, type);
        return this;
    },

    _setBaseDecorators : function (){
        this._super();
        var inputDecorator = new Form.Decorator.Element.BaseInput();
        this.addDecorator(inputDecorator);

        var labelDecorator = new Form.Decorator.Element.BaseLabel();
        this.addDecorator(labelDecorator);

        var listenersDecorator = new Form.Decorator.Element.BaseItemListeners();
        this.addDecorator(listenersDecorator);

        return this;
    }

});
