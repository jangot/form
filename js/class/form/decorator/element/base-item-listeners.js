Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseItemListeners', {

    decorate : function (result, element){
        var input = result.find('input');
        element.onChange('checked', function (value){
            input.attr('checked', value);
        });
        element.onChange('disabled', function (disabled){
            input.attr('disabled', disabled);
        });

        input.change(function (){
            console.log('ch', element.getName());
            var value = $(this).prop('checked');
            element.setChecked(value);
        });
        return result;
    }

});

