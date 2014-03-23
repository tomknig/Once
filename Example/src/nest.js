function Nest(elementId, settings) {
    'use strict';
    /* jsling browser: true*/
    
    this.elementId = elementId;
    this.settings = settings;
    this.args = arguments;
    
    this.render = function () {
        var that = this;
        
        //pretend that the domchanges take some time
        setTimeout(function () {
            var newDomElement = document.createElement('p');
            newDomElement.innerHTML = 'This is all new - but yet everytime same - text';
            newDomElement.style.color = '#ffaabb';
            document.getElementById(elementId).appendChild(newDomElement);

            that.isRendered();
        }, 1042);
    };
    
    this.init =  function () {
        document.getElementById(elementId).getElementsByTagName('p')[0].style.backgroundColor = '#ff0000';
    };
}
