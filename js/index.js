
$(function (){


    var test = new Form.Element.Text('test');
    var testDecorator = new Form.Decorator.Element.BaseInput();
    test
        .addDecorator(testDecorator)
    ;

    $('#form').append(test.getHtml());

    var sel = new Form.Element.Select('sel');
    var selDecorator = new Form.Decorator.Element.Select();
    sel
        .addDecorator(selDecorator)
        .addOption('Start')
        .addOption('Finish')
        .addOption('End')
    ;

    $('#form').append(sel.getHtml());

    $('#br').click(function (){
        console.log(sel.getValue());
    });

    $('#bv').click(function (){
        sel.addOption('oue');
    })

});

