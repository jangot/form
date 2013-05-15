Form.Decorator.Element.Abstract('Form.Decorator.Element.Select', {

    _select : null,

    decorate : function (result, element){
        result = $('<select></select>');

        result.change(function (){
            var val = $(this).val();
            element.setParam('value', val)
        });

        this._setOptionsToSelect(element.getOptions(), result);

        this._select = result;
        return result;
    },

    update : function (attrName, element){
        if (attrName == 'value') {
            var value = element.getParam('value');
            this._select.find('[value="' + value + '"]').attr('selected', true);
        }
        if (attrName == 'options') {
            this._setOptionsToSelect(element.getOptions(), this._select);
        }
    },

    _setOptionsToSelect : function (options, select){
        select.html('');
        for (var i = 0; i < options.length; i++) {
            var htmlOption = $('<option value="'+ options[i].value +'">'+ options[i].label +'</option>');
            select.append(htmlOption);
        }
        return this;
    }

});
