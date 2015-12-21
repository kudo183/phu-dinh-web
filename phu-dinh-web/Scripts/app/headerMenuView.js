window.app.view.headerMenuView = (function () {
    return function (id) {
        var ulTonKho = window.app.utilsDOM.createElement("ul");
        var liTonKho = window.app.utilsDOM.createElement("li");
        var aTonKho = window.app.utilsDOM.createElement("a", {}, undefined, "Ton Kho");
        ulTonKho.appendChild(liTonKho);
        liTonKho.appendChild(aTonKho);

        var ulLine1 = window.app.utilsDOM.createElement("ul");
        var liLine1 = window.app.utilsDOM.createElement("li", {}, undefined, "|");
        window.app.utilsDOM.addClass(liLine1, "line");
        ulLine1.appendChild(liLine1);

        var ulXuat = window.app.utilsDOM.createElement("ul");
        var liXuat = window.app.utilsDOM.createElement("li");
        var aXuat = window.app.utilsDOM.createElement("a", {}, undefined, "Xuat");
        ulXuat.appendChild(liXuat);
        liXuat.appendChild(aXuat);

        var ulLine2 = window.app.utilsDOM.createElement("ul");
        var liLine2 = window.app.utilsDOM.createElement("li", {}, undefined, "|");
        window.app.utilsDOM.addClass(liLine2, "line");
        ulLine2.appendChild(liLine2);

        var ulAccount = window.app.utilsDOM.createElement("ul");
        var liAccount = window.app.utilsDOM.createElement("li");
        var aEdit = window.app.utilsDOM.createElement("a", { href: "/Account/Manage" }, undefined, "Manage");
        var textOr = window.app.utilsDOM.createElement("span", {}, undefined, " or ");
        var aLogoff = window.app.utilsDOM.createElement("a", { id: "logOff" }, undefined, "Log Off");
        ulAccount.appendChild(liAccount);
        liAccount.appendChild(aEdit);
        liAccount.appendChild(textOr);
        liAccount.appendChild(aLogoff);

        var view = window.app.utilsDOM.createElement("div", { id: id });
        view.appendChild(ulTonKho);
        view.appendChild(ulLine1);
        view.appendChild(ulXuat);
        view.appendChild(ulLine2);
        view.appendChild(ulAccount);

        return view;
    };
})();