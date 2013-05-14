Form.Element.SingleValue('Form.Element.Text', {

    init : function (name){
        this._super(name);
        this._params[this.constructor.PARAM_NAME_TYPE] = 'text';
    },

    _setBaseDecorators : function (){
        this._super();
        var inputDecorator = new Form.Decorator.Element.BaseInput();
        this.addDecorator(inputDecorator);

        var labelDecorator = new Form.Decorator.Element.BaseLabel();
        this.addDecorator(labelDecorator);

        var errorDecorator = new Form.Decorator.Element.BaseErrorBox();
        this.addDecorator(errorDecorator);

        return this;
    }

});
