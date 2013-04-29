Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseMultiValue', {

    decorate : function (result, element){
        result.addClass('form-element-' + element.getType());
        return result;
    }

});
