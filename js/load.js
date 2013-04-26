function sc(src) {
    document.write('<script  type="text/javascript" src="js/'+ src +'.js"></script>');
}

sc('libs/jquery-1.9.1');
sc('libs/jquerymx-3.2.custom.min');
sc('libs/custome/contract');

sc('class/form/validator/required')

sc('class/form/decorator/element/abstract');
sc('class/form/decorator/element/base-input');
sc('class/form/decorator/element/base-label');
sc('class/form/decorator/element/base-error-box');

sc('class/form/element/abstract');
sc('class/form/element/single-value');
sc('class/form/element/text');

sc('index');