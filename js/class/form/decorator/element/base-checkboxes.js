Form.Decorator.Element.Abstract('Form.Decorator.Element.Checkbox_', {

    _html : null,
    _element : null,
    _type : null,

    decorate : function (result, element){
        this._html = $('<div></div>');
        this._element = element;
        this._type = element.getType();

        this._setOptionsToBlock(this._html, element.getOptions());

        return this._html;
    },

    update : function (attrName, element){
        if (attrName == 'value') {
            this._setOptionsToBlock(this._html, element.getOptions());
        }
    },

    _setOptionsToBlock : function (block, options){
        block.html('');
        for (var i = 0; i < options.length; i++) {
            var checkbox = this._getCheckbox(i, options[i]);
            block.append(checkbox.getHtml());
        }
        return this;
    },

    _getCheckbox : function (position, option){
        var checkbox = new Form.Element.Checked(option.value, option.value);

        if (this._type == 'radios') {
            checkbox.setType('radio');
        }

        checkbox
            .addDecorator(new Form.Decorator.Element.Checkbox())
            .addDecorator(new Form.Decorator.Element.BaseLabel())
            .setLabel(option.label)
            .setValue(
                option.selected ? option.value : false
            )
        ;
        checkbox.onChange('checked', function (options, element){
            var value = element.getValue();
            if ($.type(value) === 'null') {
                this._element.deselect(checkbox.getName());
                return;
            }
            this._element.select(value);
        }, this);
        return checkbox;
    }

});
