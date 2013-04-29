$.Class('Form.Element.Interface', {

    init : 'function||',
    getHtml : 'function||$',
    reDraw : 'function||Form.Element.Interface',
    onChange : 'function|paramName(string), callback(function), context(object)|',
    getType : 'function||string',
    setLabel : 'function|label(string)|Form.Element.Interface',
    getLabel : 'function||string',
    setName : 'function|name(string)|Form.Element.Interface',
    getName : 'function||string',
    setValue : 'function|value(any)|Form.Element.Interface',
    getValue : 'function||(any)',
    disable : 'function||Form.Element.Interface',
    enable : 'function||Form.Element.Interface',
    isValid : 'function||boolean',
    showError : 'function||Form.Element.Interface',
    hideError : 'function||Form.Element.Interface',
    getParams : 'function||object'

}, {});
