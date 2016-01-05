window.app.view.headerMenuView = (function () {
    return function (id, items) {
        var view = window.app.utilsDOM.createElement("div", { id: id });
        var viewLarge = window.app.utilsDOM.createElement("div", { id: id + "Large" });
        createLargeMenuItem(viewLarge, items);
        var viewMobile = window.app.utilsDOM.createElement("div", { id: id + "Mobile" });
        createMobileMenuItem(viewMobile, items);
        view.appendChild(viewLarge);
        view.appendChild(viewMobile);
        return view;
    };

    function createLargeMenuItem(view, items) {
        var ul = window.app.utilsDOM.createElement("ul");
        var menuItems = [];
        for (var i = 0; i < items.length; i++) {
            
            var li = window.app.utilsDOM.createElement("li");
            var a = window.app.utilsDOM.createElement("a", items[i].attr, undefined, items[i].text,"menuItem");

            ul.appendChild(li);
            li.appendChild(a);

            menuItems.push(a);

            if (i === 0) {
                $(menuItems[0]).addClass("selected");
                $(items[0].id).ready(function () {
                    var viewId = items[0].attr.viewId;
                    initAndShow(viewId);
                });
            }

            $(a).click(function () {
                for (var j = 0; j < menuItems.length; j++) {
                    var selectedId = $(menuItems[j]).attr("viewId");
                    if ($(this).attr("viewId") === selectedId) {
                        initAndShow(selectedId);
                        $(menuItems[j]).addClass("selected");
                    } else {
                        $(selectedId).hide();
                        $(menuItems[j]).removeClass("selected");
                    }
                }
            });
        }

        li = window.app.utilsDOM.createElement("li");
        var refresh = window.app.utilsDOM.createElement("input", { id: "refreshButton", type: "button", title: "Cap nhat" });
        $(refresh).click(function () {
            window.app.viewModel.utils.loadCurrentViewModel();
        });
        
        ul.appendChild(li);
        li.appendChild(refresh);
        
        view.appendChild(ul);
    }

    function createMobileMenuItem(view, items) {
        var selectedItem = window.app.utilsDOM.createElement("span", { id: "mobileMenuSelectedItem" });
        view.appendChild(selectedItem);

        var menu = window.app.utilsDOM.createElement("div", { id: "mobileMenuButton" });
        $(menu).click(function () {
            $(menuWrapper).toggle();
        });
        view.appendChild(menu);

        var refresh = window.app.utilsDOM.createElement("input", { id: "mobileRefreshButton", type: "button" });
        $(refresh).click(function () {
            window.app.viewModel.utils.loadCurrentViewModel();
        });
        view.appendChild(refresh);

        var menuWrapper = window.app.utilsDOM.createElement("div", { id: "mobileMenuWapper" });
        $(menuWrapper).hide();
        
        var ul = window.app.utilsDOM.createElement("ul");
        
        var menuItems = [];
        for (var i = 0; i < items.length; i++) {
            var li = window.app.utilsDOM.createElement("li");
            var a = window.app.utilsDOM.createElement("a", items[i].attr, undefined, items[i].text, "menuItemMobile");

            ul.appendChild(li);
            li.appendChild(a);

            menuItems.push(a);

            if (i === 0) {
                $(items[0].id).ready(function () {
                    var viewId = items[0].attr.viewId;
                    initAndShow(viewId);
                    $(selectedItem).text(items[0].text);
                });
            }

            $(a).click(function () {
                for (var j = 0; j < menuItems.length; j++) {
                    var selectedId = $(menuItems[j]).attr("viewId");
                    if ($(this).attr("viewId") === selectedId) {
                        initAndShow(selectedId);
                        $(selectedItem).text($(menuItems[j]).text());
                    } else {
                        $(selectedId).hide();
                    }
                }
                $(menuWrapper).hide();
            });
        }
        
        menuWrapper.appendChild(ul);
        view.appendChild(menuWrapper);
    }

    function initAndShow(viewId) {
        window.app.viewModel.utils.setCurrentViewModel(viewId);
        window.app.viewModel.utils.initCurrentViewModel();
        $(viewId).show();
    }
})();