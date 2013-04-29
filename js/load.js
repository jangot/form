function sc(src) {
    document.write('<script  type="text/javascript" src="js/'+ src +'.js"></script>');
}

sc('libs/jquery-1.9.1');
sc('libs/jquerymx-3.2.custom.min');
sc('libs/custome/contract');

sc('class/form/validator/abstract');
sc('class/form/validator/required');

sc('class/form/decorator/element/abstract');
sc('class/form/decorator/element/base-input');
sc('class/form/decorator/element/base-label');
sc('class/form/decorator/element/base-text-listeners');
sc('class/form/decorator/element/base-item-listeners');
sc('class/form/decorator/element/base-error-box');
sc('class/form/decorator/element/base-multi-value');

sc('class/form/element/abstract');
sc('class/form/element/single-value');
sc('class/form/element/multi-value');
sc('class/form/element/text');
sc('class/form/element/checked-item');
sc('class/form/element/checkboxes');
sc('class/form/element/radios');

sc('class/form');
sc('class/form/some-form');

sc('index');