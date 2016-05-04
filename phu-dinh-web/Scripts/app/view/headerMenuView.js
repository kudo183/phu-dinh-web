window.app.view.headerMenuView = (function () {
    return function (id, model) {
        var view = window.app.utilsDOM.createElement("div", { id: id });
        var viewLarge = createLargeMenuItem(id + "Large");
        view.appendChild(viewLarge);
        var viewMobile = createMobileMenuItem(id + "Mobile");
        view.appendChild(viewMobile);
        ko.applyBindings(model, view);
        return view;
    };

    function createLargeMenuItem(id) {
        var result = window.app.utilsDOM.createElement("div", { id: id });
        var ul = window.app.utilsDOM.createElement("ul", {}, "foreach: items");
        var li = window.app.utilsDOM.createElement("li");
        var a = window.app.utilsDOM.createElement("a", {},
            "attr: {'data-item': value, id: id}, \
            click: function(){\
                $parent.selectedItemValue($data.value);\
                $parent.selectedItemText($data.text);\
            },\
            css: {selected: $parent.selectedItemValue() === value},\
            text: text",
            undefined, "menuItem");

        li.appendChild(a);
        ul.appendChild(li);
        result.appendChild(ul);

        ul = window.app.utilsDOM.createElement("ul", {}, "foreach: buttons");
        li = window.app.utilsDOM.createElement("li");
        a = window.app.utilsDOM.createElement("a", {},
            "attr: {id: id}",
            undefined, "menuButtonItem");

        li.appendChild(a);
        ul.appendChild(li);
        result.appendChild(ul);
        return result;
    }

    function createMobileMenuItem(id) {
        var result = window.app.utilsDOM.createElement("div", { id: id });
        
        var selectedItem = window.app.utilsDOM.createElement("span", { id: "mobileMenuSelectedItem" }, "text: selectedItemText");
        result.appendChild(selectedItem);

        var menu = window.app.utilsDOM.createElement("div", { id: "mobileMenuButton" });
        $(menu).click(function () {
            $(menuWrapper).toggle();
        });
        result.appendChild(menu);

        var menuWrapper = window.app.utilsDOM.createElement("div", { id: "mobileMenuWapper" });
        $(menuWrapper).hide();
        result.appendChild(menuWrapper);
        
        var ul = window.app.utilsDOM.createElement("ul", {}, "foreach: items");
        var li = window.app.utilsDOM.createElement("li");
        var a = window.app.utilsDOM.createElement("a", {},
            "attr: {'data-item': value, id: id}, \
            click: function(){\
                $parent.selectedItemValue($data.value);\
                $parent.selectedItemText($data.text);\
                $('#mobileMenuWapper').hide();\
            },\
            text: text",
            undefined, "menuItem");

        li.appendChild(a);
        ul.appendChild(li);
        menuWrapper.appendChild(ul);
        
        result.appendChild(window.app.utilsDOM.createComment("ko foreach: buttons"));
        a = window.app.utilsDOM.createElement("a", {},
            "attr: {id: id+'Mobile'}",
            undefined, "menuButtonItem");

        result.appendChild(a);
        result.appendChild(window.app.utilsDOM.createComment("/ko"));
        return result;
    }
})();