Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseErrorBox', {

    decorate : function (result, element){
        var errorBox = $('<span class="errorBox"></span>');
        result.append(errorBox);
        this._addListeners(errorBox, element);
        return result;
    },

    _addListeners : function (errorBox, element){
        element.onChange(element.constructor.PARAM_NAME_ERROR_MESSAGE, function (error){
            if (error) {
                errorBox.html(error).show();
            } else {
                errorBox.html('').hide();
            }
        });
    }

});
