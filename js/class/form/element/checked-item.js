Form.Element.SingleValue('Form.Element.CheckedItem', {
    PARAM_NAME_CHECKED : 'checked',

    TYPE_CHECKBOX : 'checkbox',
    TYPE_RADIO : 'radio'
}, {

    _checked : null,

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_CHECKED] = false;

        this.setType(this.constructor.TYPE_CHECKBOX);
    },

    setChecked : function (checked){
        checked = Boolean(checked);
        this.setParam(this.constructor.PARAM_NAME_CHECKED, checked);
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

    setBaseDecorators : function (){
        this._super();
        var inputDecorator = new Form.Decorator.Element.BaseInput();
        this.addDecorator(inputDecorator);

        var labelDecorator = new Form.Decorator.Element.BaseLabel();
        this.addDecorator(labelDecorator);

        var errorDecorator = new Form.Decorator.Element.BaseErrorBox();
        this.addDecorator(errorDecorator);

        var listenersDecorator = new Form.Decorator.Element.BaseItemListeners();
        this.addDecorator(listenersDecorator);

        return this;
    }

});
