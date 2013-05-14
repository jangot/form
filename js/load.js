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
sc('class/form/decorator/element/select');

var ELEMENT_DIR = 'element2';
sc('class/form/'+ ELEMENT_DIR +'/abstract');

sc('class/form/'+ ELEMENT_DIR +'/single');
sc('class/form/'+ ELEMENT_DIR +'/text');

sc('class/form/'+ ELEMENT_DIR +'/list');
sc('class/form/'+ ELEMENT_DIR +'/select');

//
//sc('class/form/'+ ELEMENT_DIR +'/multi-value');
//sc('class/form/'+ ELEMENT_DIR +'/text');
//sc('class/form/'+ ELEMENT_DIR +'/checked-item');
//sc('class/form/'+ ELEMENT_DIR +'/checkboxes');
//sc('class/form/'+ ELEMENT_DIR +'/radios');

sc('class/form');
//sc('class/form/some-form');

sc('index');