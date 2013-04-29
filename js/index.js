var form = [];

$(function (){

    var inputText = new Form.Element.Text();

    var validator = new Form.Validator.Required();
    validator.setMessage('Error!!!');

    inputText
        .setValue('value')
        .setLabel('Required element:')
        .setName('testName')
        .addDecorator(customDecoratorForShowError)
        .addDecorator(new Form.Decorator.Element.BaseTextListeners())
        .addValidator(validator)
    ;
    form.push(inputText);
    $('form').append(inputText.getHtml());


    var checkboxes = new Form.Element.Checkboxes();
    checkboxes
        .setName('test_checkbox')
        .addItem('first')
        .addItem('second')
        .addItem('new')
    ;
    form.push(checkboxes);
    $('form').append(checkboxes.getHtml());


    var radios = new Form.Element.Radios();
    radios
        .setLabel('Test checkboxes')
        .setName('test_checkbox')
        .addItem('first')
        .addItem('second')
        .addItem('new')
        .addDecorator(customDecoratorForRadiosTitle)
    ;
    form.push(radios);
    $('form').append(radios.getHtml());



    $('button').click(function (){
        var params = [];
        for (var i in form) {
            params.push(form[i].getValue());
        }
        $('#result').html(JSON.stringify(params));
    });


});

var customDecoratorForRadiosTitle = {
    decorate : function (result, element){
        var label = element.getLabel();
        result.prepend('<h3>'+ label +'</h3>');
        return result;
    }
}

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
};