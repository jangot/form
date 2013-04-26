Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseInput', {

    decorate : function (result, element){
        var params = element.getParams();

        var input = $('<input type="'+ params.type +'" />');

        if (params.value) {
            input.attr('value', params.value);
        }
        if (params.disabled) {
            input.attr('disabled', 'disabled');
        }
        this._addListeners(input, element);
        return input;
    },

    _addListeners : function (result, element){
        element.onChange('value', function (value){
            result.attr('value', value);
        });
        element.onChange('disabled', function (disabled){
            result.attr('disabled', disabled);
        });

        result.keyup(function (){
            var value = $(this).val();
            element.setValue(value);
            if (!element.isValid()) {
                element.showError();
            } else {
                element.hideError();
            }
        });
    }

});
