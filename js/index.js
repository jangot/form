function sc(src) {
    document.write('<script  type="text/javascript" src="js/'+ src +'.js"></script>');
}

sc('libs/jquery-1.9.1');
sc('libs/jquerymx-3.2.custom.min');
sc('libs/custome/contract');


sc('constants');


//class
sc('class/debug');
sc('class/geometry');
sc('class/coordinates');


sc('class/keyboard');
sc('class/animation');
sc('class/space');

sc('class/drawable/abstract');
sc('class/drawable/point');
sc('class/drawable/frame');
sc('class/drawable/racket');
sc('class/drawable/ball');


sc('app');
