window.app.view.nhapView = (function () {
    return function (id) {
        var view = window.app.view.utils.createReadOnlyGridView(id, [
                { type: "select", name: "kho" },
                { type: "date", name: "ngay" },
                { type: "selectAllowBlank", name: "nhaCungCap" }
        ], "row");
        return view;
    };
})();