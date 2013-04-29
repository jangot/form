Form.Element.Abstract('Form.Element.MultiValue', {

    _items : null,

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_TYPE] = 'multi-value';
        this._params[this.constructor.PARAM_NAME_VALUE] = {};

        this._items = [];
    },

    draw : function (result){
        var result = $('<div></div>');
        for (var i = 0; i < this._items.length; i++) {
            result.append(this._items[i].getHtml());
        }

        return this._super(result);
    },

    addItem : function (element){
        this._items.push(element);
        element.onChange(this.constructor.PARAM_NAME_VALUE, function (){
            this._updateValue();
        }, this);
    },

    setBaseDecorators : function (){
        this._super();
        var inputDecorator = new Form.Decorator.Element.BaseMultiValue();
        this.addDecorator(inputDecorator);

    },

    getLength : function (){
        return this._items.length;
    },

    _updateValue : function (){
        var newValue = {};
        for (var i = 0; i < this._items.length; i++) {
            var itemValue = this._items[i].getValue();
            if (itemValue) {
                newValue[this._items[i].getName()] = itemValue;
            }
        }
        this.setValue(newValue);
    }

});