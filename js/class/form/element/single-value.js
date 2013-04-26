Form.Element.Abstract('Form.Element.SingleValue', {

    init : function (){
        this._super();
        this._params[this.constructor.PARAM_NAME_TYPE] = 'single-value';
        this._params[this.constructor.PARAM_NAME_VALUE] = '';
    }

});
