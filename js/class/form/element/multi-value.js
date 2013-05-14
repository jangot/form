Form.Element.Abstract('Form.Element.MultiValue', {

    _items : null,

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_TYPE] = 'multi-value';
        this._params[this.constructor.PARAM_NAME_VALUE] = {};

        this._items = [];
    },

    addItem : function (element){
        this._items.push(element);
        element.onChange(this.constructor.PARAM_NAME_VALUE, function (){
            this._updateValue();
        }, this);
    },

    getLength : function (){
        return this._items.length;
    },

    _setBaseDecorators : function (){
        this._super();
        var inputDecorator = new Form.Decorator.Element.BaseMultiValue();
        this.addDecorator(inputDecorator);

    },

    _draw : function (result){
        var result = $('<div></div>');
        for (var i = 0; i < this._items.length; i++) {
            result.append(this._items[i].getHtml());
        }

        return this._super(result);
    },

    _updateValue : function (){
        var newValue = [];
        for (var i = 0; i < this._items.length; i++) {
            var itemValue = this._items[i].getValue();
            if (itemValue) {
                newValue.push(itemValue);
            }
        }
        this.setValue(newValue);
    }

});