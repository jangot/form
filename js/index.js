
$(function (){



    var form = new Form.SomeForm();

    $('#form').append(form.getHtml());

    $('#br').click(function (){
        var values = form.getValues();
        $('#result').html(JSON.stringify(values));
    });
    $('#bv').click(function (){
        if(!form.isValid()) {
            form.showErrors();
        } else {
            form.hideErrors();
        }
    });

    $('[name="r"]').change(function (){
        console.log(this.value);
    });
});
