window.app.view.donHangView = (function () {
    return function (id) {
        var view = window.huy.control.dataGrid.createView(id);
        return view;
    };
})();