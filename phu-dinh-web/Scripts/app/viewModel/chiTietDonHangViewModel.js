window.app.viewModel.chiTietDonHangViewModel = (function () {
    var viewModel = huy.control.dataGrid.createViewModel(window.app.dataProvider.chiTietDonHangDataProvider);
    viewModel.addColumn({
        headerText: "Mã",
        type: "span",
        cellValueProperty: "ma",
        readOnly: true,
        order: 1,
        filterValue: ko.observable()
    });
    viewModel.addColumn({
        headerText: "Mã ĐH",
        type: "span",
        cellValueProperty: "maDonHang",
        readOnly: true,
        order: 0,
        filterValue: ko.observable()
    });

    viewModel.addColumn({
        headerText: "Mặt hàng",
        type: "comboBox",
        cellValueProperty: "maMatHang",
        itemsSourceName: "matHangs",
        itemText: "tenMatHang",
        itemValue: "ma",
        readOnly: false,
        order: 0,
        filterValue: ko.observable()
    });

    viewModel.addColumn({
        headerText: "Số lượng",
        type: "textBox",
        cellValueProperty: "soLuong",
        readOnly: false,
        order: 0,
        filterValue: ko.observable()
    });

    viewModel.init = function () {
        if (viewModel.initialized === true)
            return;

        viewModel.initialized = true;

        viewModel.load(viewModel);
    };
    return viewModel;
})();