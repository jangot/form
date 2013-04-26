$(function (){

    var inputText = new Form.Element.Text();

    var validator = new Form.Validator.Required();

    inputText
        .setValue('test value')
        .setLabel('Test input:')
        .addValidator(validator)
    ;

    $('body').append(inputText.getHtml());

});

