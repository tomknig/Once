function Once(scriptId, args) {
    'use strict';
    
    var script = document.getElementById(scriptId),
        idx = 0;
    
    this.renderingDidFinish = function (concrete) {
        var initer = '',
            arg,
            id,
            i;
        
        if (concrete.hasOwnProperty('args') && concrete.hasOwnProperty('init')) {
            for (i = 0; i < concrete.args.length; i += 1) {
                if (initer !== '') {
                    initer += ',';
                }
                arg = concrete.args[i];
                initer += JSON.stringify(arg);
            }
        }
        
        id = concrete.constructor.name + idx;
        idx += 1;
        
        script.innerHTML += 'var ' + id + '=new ' + concrete.constructor.name + '(' + initer + ');';
        script.innerHTML += id + '.init();';
    };
    
    this.init = function () {
        var abstract,
            i;
        
        script.innerHTML = '';
        
        for (i = 0; i < args.length; i += 1) {
            abstract = args[i];
            if (abstract.hasOwnProperty('render')) {
                abstract.isRendered = this.renderingDidFinish;
                abstract.render();
            }
        }
    };
    
    window.onload = this.init();
}