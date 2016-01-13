window.app.view.khachHangView = (function () {
    return function (id) {
        var view = window.app.view.utils.createReadOnlyGridView(id, [
                { type: "select", name: "khachHang" },
                { type: "dateAllowBlank", name: "ngay" }
        ], "row");
        return view;
    };
})();