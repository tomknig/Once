function Once(scriptId, args) {
    'use strict';
        
    //use `grunt-once` api to make changes renderable
    window.isRenderable = false;
    
    var script = document.getElementById(scriptId),
        numberOfRenderingObjects = 0,
        isRenderingsAreSetUp = false,
        numberOfRenderedObjects = 0;
    
    this.checkState = function () {
        if (isRenderingsAreSetUp && numberOfRenderingObjects === 0) {
            window.isRenderable = true;
        }
    };
    
    this.renderingDidFinish = function (object) {
        var initer = '',
            arg,
            id,
            i;
        
        if (object.hasOwnProperty('args') && object.hasOwnProperty('init')) {
            for (i = 0; i < object.args.length; i += 1) {
                if (initer !== '') {
                    initer += ',';
                }
                arg = object.args[i];
                initer += JSON.stringify(arg);
            }
        }
        
        id = object.constructor.name + numberOfRenderedObjects;
        numberOfRenderedObjects += 1;
        
        script.innerHTML += 'var ' + id + '=new ' + object.constructor.name + '(' + initer + ');';
        script.innerHTML += id + '.init();';
        
        numberOfRenderingObjects -= 1;
        this.checkState();
    };
    
    this.init = function () {
        var callbackObject = this,
            callbackMethod = function () {
                callbackObject.renderingDidFinish(this);
            },
            object,
            i;
        
        script.innerHTML = '';
        
        for (i = 0; i < args.length; i += 1) {
            object = args[i];
            if (object.hasOwnProperty('render')) {
                numberOfRenderingObjects += 1;
                object.isRendered = callbackMethod;
                object.render();
            }
        }
        
        isRenderingsAreSetUp = true;
        this.checkState();
    };
    
    window.onload = this.init();
}