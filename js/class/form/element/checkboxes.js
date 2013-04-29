Form.Element.MultiValue('Form.Element.Checkboxes', {

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
            .setType(Form.Element.CheckedItem.TYPE_CHECKBOX)
            .setName(this.getName() + this.getLength())
            .setValue(value)
            .setLabel(label)
        ;
        this._super(checkbox);
        return this;
    }

});
