Form.Decorator.Element.Abstract('Form.Decorator.Element.Checkbox', {

    _html : null,

    decorate : function (result, element){
        this._html = $('<div></div>');

        this._html.html(this._getHtmlForOptions(element));

        this._addListeners(element);
        return this._html;
    },

    update : function (attr, element){
        if(attr == 'options' || attr == 'value') {
            this._html.html(this._getHtmlForOptions(element));
            this._addListeners(element);
        }
        return this;
    },

    _addListeners : function (element){
        this._html.find('input').change(function (){
            if (this.checked)  {
                element.select(this.value);
            } else {
                element.deselect(this.value);
            }
        });
    },

    _getHtmlForOptions : function (element){
        var result = '';
        var type = element.getType();
        var options = element.getOptions();
        for (var i in options) {

            var checked = '';
            if (options[i].selected) {
                checked = ' checked="checked"';
            }

            result += ('<label>' +
                '<input value="'+ options[i].value + '"' +
                ' type="' + type + '"' +
                'name="' + element.getName() + '"' +
                checked + '" />' +
                options[i].label +
                '</label>');
        }
        return result;
    }

});
