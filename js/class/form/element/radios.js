Form.Element.MultiValue('Form.Element.Radios', {

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_TYPE] = 'checkboxes';
    },


    addItem : function (value, label){
        if(!label) {
            label = value;
        }
        var checkbox = new Form.Element.CheckedItem();
        checkbox
            .setType(Form.Element.CheckedItem.TYPE_RADIO)
            .setName(this.getName())
            .setValue(value)
            .setLabel(label)
        ;
        this._super(checkbox);
        return this;
    }

});
