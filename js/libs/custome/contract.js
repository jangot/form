function contract(arg, debug) {
    if (this instanceof contract) {
        this._argsuments = arg;
        this._fulfilled = false;
    } else {
        return new contract(arg, debug);
    }
}

contract.prototype = {
    _argsuments : null,
    _fulfilled : null,

    params : function(){
        if (this._fulfilled) {
            return this;
        }
        if (arguments.length == 0) {
            this._fulfilled = true;
            return this;
        }
        this._fulfilled = this._checkArguments(arguments);
        return this;
    },

    end : function(){
        if(!this._fulfilled){
            var message = 'Broke parameter contract';
            throw new Error(message);
        }
    },

    _checkArguments : function(types) {
        for (var i in types) {
            if ($.type(types[i]) === 'array') {
                if (this._checkTrickyArgument(this._argsuments[i], types[i])) {
                    continue;
                }
            } else {
                if (types[i] == 'any') {
                    continue;
                }
                if (types[i] == 'object' && $.isPlainObject(this._argsuments[i])) {
                    continue;
                }
                if ($.type(this._argsuments[i]) === types[i]) {
                    continue;
                }
            }
            return false;
        }
        return true;
    },

    _checkTrickyArgument : function (argument, type) {
        switch (type[0]) {
            case 'interface':
                if($.isPlainObject(argument)) {
                    /**
                     * @todo
                     *
                     * Some code for check interface in type[1]
                     *
                     * For example:
                     * @return (argument instanceOf type[1])
                     */
                    return true;
                } else {
                    return false;
                }
                break;
            default :
                return false;
                break;
        }
    }
}
