Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseTextListeners', {

    decorate : function (result, element){
        var input = result.find('input');
        element.onChange('value', function (value){
            input.attr('value', value);
        });
        element.onChange('disabled', function (disabled){
            input.attr('disabled', disabled);
        });

        input.change(function (){
            var value = $(this).val();
            element.setValue(value);
        });

        input.keyup(function (){
            var value = $(this).val();
            element.setValue(value);
        });
        return result;
    }

});
