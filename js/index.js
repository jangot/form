var customDecoratorForShowError = {
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

$(function (){

    var inputText = new Form.Element.Text();

    var validator = new Form.Validator.Required();
    validator.setMessage('Обязательное поле');

    inputText
        .setValue('test value')
        .setLabel('Test input:')
        .setName('testName')
        .addDecorator(customDecoratorForShowError)
        .addValidator(validator)
    ;

    $('body').append(inputText.getHtml());


    var checkboxes = new Form.Element.Checkboxes();
    checkboxes
        .setName('test_checkbox')
        .addItem('first')
        .addItem('second')
        .addItem('new')
    ;
    $('body').append(checkboxes.getHtml());
});

