$.Class('Form.Validator.Required', {

    validate : function (value){
        return Boolean(value);
    },

    getMessage : function (){
        return 'Element is required';
    }

});
