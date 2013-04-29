Form.Object('Form.SomeForm', {

    init : function (){
        this._super();
        this
            ._addInputTextAuto()
            ._addCheckboxes()
            ._addRadios()
            ._addInputText()
        ;
    },

    _addInputTextAuto : function (){
        var inputText = new Form.Element.Text();

        var validator = new Form.Validator.Required();
        validator.setMessage('Error!!!');

        inputText
            .setValue('value')
            .setLabel('Required element:')
            .setName('autoText')
            .addDecorator(this._getCustomDecoratorForShowError())
            .addDecorator(new Form.Decorator.Element.BaseTextListeners())
            .addValidator(validator)
        ;
        this.addElement(inputText);
        return this;
    },

    _addInputText : function (){
        var inputText = new Form.Element.Text();

        var validator = new Form.Validator.Required();
        validator.setMessage('Error!!!');

        inputText
            .setValue('value')
            .setLabel('Required element:')
            .setName('testName')
            //.addDecorator(this._getCustomDecoratorForShowError())
            .addDecorator(new Form.Decorator.Element.BaseTextListeners())
            .addValidator(validator)
        ;
        this.addElement(inputText);
        return this;
    },

    _addCheckboxes : function (){
        var checkboxes = new Form.Element.Checkboxes();
        checkboxes
            .setName('test_checkbox')
            .addItem('first')
            .addItem('second')
            .addItem('new')
        ;
        this.addElement(checkboxes);
        return this;
    },

    _addRadios : function (){
        var radios = new Form.Element.Radios();
        radios
            .setLabel('Test checkboxes')
            .setName('test_radios')
            .addItem('first')
            .addItem('second')
            .addItem('new')
            .addDecorator(this._getCustomDecoratorForRadiosTitle())
        ;
        this.addElement(radios);
        return this;
    },

    _getCustomDecoratorForRadiosTitle : function (){
        return {
            decorate : function (result, element){
                var label = element.getLabel();
                result.prepend('<h3>'+ label +'</h3>');
                return result;
            }
        }
    },
    _getCustomDecoratorForShowError : function (){
        return {
            decorate : function (result, element){
                result.find('input').keyup(function (){
                    if(!element.isValid()) {
                        element.showError();
                    } else {
                        element.hideError();
                    }
                });
                return result;
            }
        }
    }


});
