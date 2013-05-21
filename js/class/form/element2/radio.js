Form.Element.List('Form.Element.Radio', {


    select : function (value){
        var options = this.getParam(this.constructor.PARAM_NAME_OPTIONS);
        for (var name in options) {
            options[name].selected = false;
        }
        this._super(value);
        return this;
    },

    setValue : function (value){
        this._super([value]);
        return this;
    },

    _getCustomValue : function (){
        var valueArray = this._super();
        console.log(valueArray[0]);
        return valueArray[0];
    }
});
