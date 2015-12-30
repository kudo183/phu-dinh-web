window.app.view.headerMenuView = (function () {
    return function (id, items) {
        var view = window.app.utilsDOM.createElement("div", { id: id });
        var menuItems = [];
        for (var i = 0; i < items.length; i++) {
            var ul = window.app.utilsDOM.createElement("ul");
            var li = window.app.utilsDOM.createElement("li");
            var a = window.app.utilsDOM.createElement("a", items[i].attr, undefined, items[i].text);
            window.app.utilsDOM.addClass(a, "menuItem");
            
            ul.appendChild(li);
            li.appendChild(a);

            view.appendChild(ul);

            menuItems.push(a);
            
            $(a).click(function () {
                for (var j = 0; j < menuItems.length; j++) {
                    var selectedId = $(menuItems[j]).attr("viewId");
                    if ($(this).attr("viewId") === selectedId) {
                        $(selectedId).show();
                        $(menuItems[j]).addClass("selected");
                    } else {
                        $(selectedId).hide();
                        $(menuItems[j]).removeClass("selected");
                    }
                }
            });
        }
        
        $(menuItems[0]).addClass("selected");
        $(items[0].id).ready(function() {
            $(items[0].attr.viewId).show();
        });
        return view;
    };
})();