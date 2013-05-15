Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseInput', {

    _html : null,

    decorate : function (result, element){
        var params = element.getParams();

        var input = $('<input type="'+ params.type +'" name="'+ element.getName() +'" />');

        if (params.value) {
            input.attr('value', params.value);
        }

        if (params.disabled) {
            input.attr('disabled', 'disabled');
        }

        input.change(function (){
            var value = $(this).val();
            element.setParam('value', value);
        });

        this._html = input;
        return input;
    },

    update : function (attrName, element){
         if (attrName == 'value') {
             this._html.val(element.getParam('value'))
         }
        if (attrName == 'disabled') {
            var disabled = element.getParam('disabled')
            this._html.attr('disabled', disabled);
        }
    }

});
