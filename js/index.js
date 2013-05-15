
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


    var ch = new Form.Element.Checked('ch1');
    ch
        .addDecorator(new Form.Decorator.Element.Checkbox())
        .addDecorator(new Form.Decorator.Element.BaseLabel())
        .setLabel('Yes?')
        .setValue('yes')
    ;

    $('#form').append(ch.getHtml());

    var chs = new Form.Element.Radios('chs1');
    chs
        .setLabel('Checkboxes list')
        .addDecorator(new Form.Decorator.Element.CheckboxesRadios())
        .addDecorator(new Form.Decorator.Element.BaseLabel(true))
        .addOption('first')
        .addOption('second', 'second', true)
        .addOption('new bern')
        .addOption('foo')
    ;

    $('#form').append(chs.getHtml());

    //=============================
    $('#br').click(function (){
        console.log(chs.getValue());
    });

    $('#bv').click(function (){
        test.disable();
    })

});

