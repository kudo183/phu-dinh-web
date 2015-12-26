window.app.view.headerMenuView = (function () {
    return function (id, items) {
        var view = window.app.utilsDOM.createElement("div", { id: id });
        var menuItems = [];
        for (var i = 0; i < items.length; i++) {
            var ul = window.app.utilsDOM.createElement("ul");
            var li = window.app.utilsDOM.createElement("li");
            var a = window.app.utilsDOM.createElement("a", { viewId: items[i].id }, undefined, items[i].text);
            window.app.utilsDOM.addClass(a, "menuItem");
            
            ul.appendChild(li);
            li.appendChild(a);

            view.appendChild(ul);

            var ulLine = window.app.utilsDOM.createElement("ul");
            var liLine = window.app.utilsDOM.createElement("li", {}, undefined, "|");
            window.app.utilsDOM.addClass(liLine, "line");
            ulLine.appendChild(liLine);

            view.appendChild(ulLine);
            
            menuItems.push(a);
            
            $(a).click(function () {
                for (var j = 0; j < menuItems.length; j++) {
                    var selectedId = $(menuItems[j]).attr("viewId");
                    if ($(this).attr("viewId") === selectedId) {
                        $(selectedId).show();
                        $(menuItems[j]).addClass("selectedMenuItem");
                        $(menuItems[j]).removeClass("menuItem");
                    } else {
                        $(selectedId).hide();
                        $(menuItems[j]).addClass("menuItem");
                        $(menuItems[j]).removeClass("selectedMenuItem");
                    }
                }
            });
        }

        var ulAccount = window.app.utilsDOM.createElement("ul");
        var liAccount = window.app.utilsDOM.createElement("li");
        var aEdit = window.app.utilsDOM.createElement("a", { href: "/Account/Manage" }, undefined, "Manage");
        var textOr = window.app.utilsDOM.createElement("span", {}, undefined, " or ");
        var aLogoff = window.app.utilsDOM.createElement("a", { id: "logOff" }, undefined, "Log Off");
        ulAccount.appendChild(liAccount);
        liAccount.appendChild(aEdit);
        liAccount.appendChild(textOr);
        liAccount.appendChild(aLogoff);

        window.app.utilsDOM.addClass(aEdit, "menuItem");
        window.app.utilsDOM.addClass(aLogoff, "menuItem");
        
        view.appendChild(ulAccount);

        $(menuItems[0]).addClass("selectedMenuItem");
        $(menuItems[0]).removeClass("menuItem");
        $(items[0].id).ready(function() {
            $(items[0].id).show();
        });
        return view;
    };
})();