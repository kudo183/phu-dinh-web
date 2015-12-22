window.app.view.xuatView = (function () {
    return function (id) {
        var view = window.app.utilsDOM.createElement("div", { id: id }, "with: xuatViewModel");
        return view;
    };
})();