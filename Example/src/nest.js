function Nest(elementId, settings) {
    'use strict';
    /* jsling browser: true*/
    
    this.elementId = elementId;
    this.settings = settings;
    this.args = arguments;
    
    this.render = function () {
        var newDomElement = document.createElement('p');
        newDomElement.innerHTML = 'This is all new - but yet everytime same - text';
        newDomElement.style.color = '#ffaabb';
        document.getElementById(elementId).appendChild(newDomElement);
        
        this.isRendered(this);
    };
    
    this.init =  function () {
        document.getElementById(elementId).getElementsByTagName('p')[0].style.backgroundColor = '#ff0000';
    };
}
