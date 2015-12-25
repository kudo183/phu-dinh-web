window.app.view.xuatView = (function () {
    return function (id) {
        var view = window.app.view.utils.createReadOnlyGridView(id, "xuatViewModel", [
                { type: "select", name: "kho" },
                { type: "date", name: "ngay" }
        ]);
        return view;
    };
})();