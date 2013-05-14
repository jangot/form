Form.Element.MultiOptions('Form.Element.Checkboxes', {

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_TYPE] = 'checkboxes';
    },


    addOption : function (value, label, selected){
        this._super(value, label, selected);
        var option = this._getOption();

        var checkbox = new Form.Element.CheckedItem();
        checkbox
            .setType(Form.Element.CheckedItem.TYPE_CHECKBOX)
            .setName(value)
            .setValue(value)
            .setLabel(option.label)
        ;
        checkbox.onChange('value', function (value){
            if (value) {
                this.select(value)
            } else {
                this.deselect(value);
            }
        }.bind(this));
        return this;
    }

});
