
$(function (){


    var test = new Form.Element.Text('test');
    test
        .setLabel('Test')
        .addDecorator(new Form.Decorator.Element.BaseInput())
        .addDecorator(new Form.Decorator.Element.BaseLabel())
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


    var ch = new Form.Element.Checkbox('check1');
    ch
        .setLabel('CheckboxTrue')
        .addDecorator(new Form.Decorator.Element.Checkbox())
        .addDecorator(new Form.Decorator.Element.BaseLabel(true))
        .addOption('Start')
        .addOption('Finish')
        .addOption('End')
    ;
    $('#form').append(ch.getHtml());

    var rd = new Form.Element.Radio('Rad1');
    rd
        .setLabel('RadioTrue')
        .addDecorator(new Form.Decorator.Element.Checkbox())
        .addDecorator(new Form.Decorator.Element.BaseLabel(true))
        .addOption('Start')
        .addOption('Finish')
        .addOption('End')
    ;
    $('#form').append(rd.getHtml());


    //=============================
    $('#br').click(function (){
        console.log(rd.getValue());
    });

    $('#bv').click(function (){
        rd.setValue('Finish');
    })

});

