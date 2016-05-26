window.app.view.xuatView = (function () {
    return function (id) {
        var view = window.huy.control.dataGrid.createView(id, {
            hasCustomFilter: true,
            hasColumnHeader: false,
            hasColumnFilter: false,
            hasBottomToolbar: false
        }, "row");
        return view;
    };
})();