Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseLabel', {

    decorate : function (result, element){
        var label = $('<label>' + element.getLabel() + '</label>');

        label.append(result);
        return label;
    }

});
