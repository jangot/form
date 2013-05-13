Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseInput', {

    decorate : function (result, element){
        var params = element.getParams();

        var input = $('<input type="'+ params.type +'" name="'+ element.getName() +'" />');

        if (params.value) {
            input.attr('value', params.value);
        }
        if (params.disabled) {
            input.attr('disabled', 'disabled');
        }

        result.html(input);
        return result;
    }

});
