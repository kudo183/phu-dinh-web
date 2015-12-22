window.app.view.headerMenuView = (function () {
    return function (id, items) {
        var view = window.app.utilsDOM.createElement("div", { id: id });

        for (var i = 0; i < items.length; i++) {
            var ul = window.app.utilsDOM.createElement("ul");
            var li = window.app.utilsDOM.createElement("li");
            var a = window.app.utilsDOM.createElement("a", { viewId: items[i].id }, undefined, items[i].text);
            ul.appendChild(li);
            li.appendChild(a);

            view.appendChild(ul);

            var ulLine = window.app.utilsDOM.createElement("ul");
            var liLine = window.app.utilsDOM.createElement("li", {}, undefined, "|");
            window.app.utilsDOM.addClass(liLine, "line");
            ulLine.appendChild(liLine);

            view.appendChild(ulLine);

            $(a).click(function () {
                for (var j = 0; j < items.length; j++) {
                    if ($(this).attr("viewId") === items[j].id) {
                        $(items[j].id).show();
                    } else {
                        $(items[j].id).hide();
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

        view.appendChild(ulAccount);

        return view;
    };
})();