Form.Element.List('Form.Element.Radios', {


    select : function (value){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        for (var name in options) {
            options[name].selected = false;
        }
        this._super(value);
        return this;
    }

});
