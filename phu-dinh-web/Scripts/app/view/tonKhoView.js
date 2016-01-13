window.app.view.tonKhoView = (function () {
    return function (id) {
        var view = window.app.view.utils.createReadOnlyGridView(id, [
                { type: "select", name: "kho" },
                { type: "date", name: "ngay" },
                { type: "selectAllowBlank", name: "loaiHang" }
        ], "row");
        return view;
    };
})();