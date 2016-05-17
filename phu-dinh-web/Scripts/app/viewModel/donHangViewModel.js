window.app.viewModel.donHangViewModel = (function () {
    var viewModel = huy.control.dataGrid.createViewModel(window.app.dataProvider.donHangDataProvider);
    viewModel.addColumn({
        headerText: "Mã",
        type: "span",
        cellValueProperty: "ma",
        readOnly: true,
        order: 0,
        filterValue: ko.observable()
    });
    viewModel.addColumn({
        headerText: "Ngày",
        type: "date",
        cellValueProperty: "ngay",
        readOnly: false,
        order: -1,
        filterValue: ko.observable()
    });

    var khachHangs = [];
    for (var i = 1; i <= 105; i++) {
        khachHangs.push({ tenKhachHang: "item " + i, maKhachHang: i });
    }
    viewModel.addColumn({
        headerText: "Khách hàng",
        type: "comboBox",
        cellValueProperty: "maKhachHang",
        items: khachHangs,
        itemText: "tenKhachHang",
        itemValue: "maKhachHang",
        readOnly: false,
        order: 0,
        filterValue: ko.observable()
    });

    var khoHangs = [];
    for (var i = 1; i <= 105; i++) {
        khoHangs.push({ tenKhoHang: "item " + i, maKhoHang: i });
    }
    viewModel.addColumn({
        headerText: "Kho hàng",
        type: "comboBox",
        cellValueProperty: "maKhoHang",
        items: khoHangs,
        itemText: "tenKhoHang",
        itemValue: "maKhoHang",
        readOnly: false,
        order: 0,
        filterValue: ko.observable()
    });
    
    viewModel.init = function() {
        if (viewModel.initialized === true)
            return;

        viewModel.initialized = true;
        window.app.view.utils.appendViewToContainer(
            window.app.view.mainContentID, "donHangView", viewModel, "donHangView");
    };
    return viewModel;
})();