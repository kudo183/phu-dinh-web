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

    viewModel.addColumn({
        headerText: "Khách hàng",
        type: "comboBox",
        cellValueProperty: "maKhachHang",
        itemsSourceName: "khachHangs",
        itemText: "tenKhachHang",
        itemValue: "ma",
        readOnly: false,
        order: 0,
        filterValue: ko.observable()
    });

    viewModel.addColumn({
        headerText: "Kho hàng",
        type: "comboBox",
        cellValueProperty: "maKhoHang",
        itemsSourceName: "khoHangs",
        itemText: "tenKho",
        itemValue: "ma",
        readOnly: false,
        order: 0,
        filterValue: ko.observable()
    });
    
    viewModel.init = function() {
        if (viewModel.initialized === true)
            return;

        viewModel.initialized = true;
        
        viewModel.load(viewModel);
    };
    return viewModel;
})();