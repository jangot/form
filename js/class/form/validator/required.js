Form.Validator.Abstract('Form.Validator.Required', {

    init : function (){
        this._super();
        this.setMessage('Required element');
    },

    validate : function (value){
        return Boolean(value);
    }

});
