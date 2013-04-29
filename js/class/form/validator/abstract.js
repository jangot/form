$.Class('Form.Validator.Abstract', {

    _message : null,

    init : function (){},

    validate : function (value){
        return true;
    },

    setMessage : function (message){
        this._message = message;
        return this;
    },

    getMessage : function (){
        return this._message;
    }

});
