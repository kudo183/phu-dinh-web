window.app.utilsDOM = (function () {
    
    var utilsDom = {
        createElement: createElement,
        createComment: createComment,
        addClass: addClass
    };
    return utilsDom;

    function createElement(name, attrs, dataBind, text, cls) {
        var element = document.createElement(name);

        for (var att in attrs) {
            element.setAttribute(att, attrs[att]);
        }
        if(dataBind !== undefined) {
            element.setAttribute("data-bind", dataBind);
        }
        if(text !== undefined) {
            var n = document.createTextNode(text);
            element.appendChild(n);
        }

        addClass(element, cls);
        
        return element;
    }

    function createComment(text) {
        return document.createComment(text);
    }

    function addClass(element, cls) {
        if (cls !== undefined) {
            element.setAttribute("class", cls);
        }
    }
})();