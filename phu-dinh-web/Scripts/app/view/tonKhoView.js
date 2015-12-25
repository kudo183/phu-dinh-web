window.app.view.tonKhoView = (function () {
    return function (id) {
        var view = window.app.view.utils.createReadOnlyGridView(id, "tonKhoViewModel", [
                { type: "select", name: "kho" },
                { type: "date", name: "ngay" },
                { type: "select", name: "loaiHang" }
        ]);
        return view;
    };
})();