$.Class('Form.Object', {

    _html : null,
    _elements : null,
    _decorators : null,

    init : function (){
        this._elements = {};
        this._decorators = {};
    },

    getHtml : function (){
        if (!this._html) {
            this._html = this._draw($('<form></form>'));
        }
        return this._html;
    },

    addElement : function (element){
        this._elements[element.getName()] = element;
        return this;
    },

    addDecorator : function (decorator){
        if($.type(decorator.decorate) === 'function') {
            this._decorators.push(decorator);
        } else {
            throw Error('There is\'t decorate method in decorator');
        }
        return this;
    },

    isValid : function (){
        var result = true;
        for (var name in this._elements) {
            if (!this._elements[name].isValid()) {
                result = false;
            }
        }
        return result;
    },

    getValues : function (){
        var result = {};
        for (var name in this._elements) {
            result[name] = this._elements[name].getValue();
        }
        return result;
    },

    showErrors : function (){
        for (var name in this._elements) {
            this._elements[name].showError();
        }
        return this;
    },

    hideErrors : function (){
        for (var name in this._elements) {
            this._elements[name].hideError();
        }
        return this;
    },

    _draw : function (result){
         for (var name in this._elements) {
             result.append(this._elements[name].getHtml());
         }

        for (var i = 0; i < this._decorators.length; i++) {
            var result = this._decorators[i].decorate(result, this);
        }
        return result;
    }

});
