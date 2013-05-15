Form.Decorator.Element.BaseInput('Form.Decorator.Element.Checkbox', {

    decorate : function (result, element){
        result = this._super.apply(this, arguments);

        result[0].checked = element.getParam('checked');
        result.change(function (){
            var checked = $(this)[0].checked;
            element.setParam('checked', checked);
        });

        return result;
    }

});
