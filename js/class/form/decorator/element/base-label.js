Form.Decorator.Element.Abstract('Form.Decorator.Element.BaseLabel', {

    _after : null,

    init : function (before){
        this._after = Boolean(before);
    },

    decorate : function (result, element){
        var label = $('<div> ' + element.getLabel() + '</div>');

        if (this._after) {
            label.append(result);
        } else {
            label.prepend(result);
        }

        return label;
    }

});
