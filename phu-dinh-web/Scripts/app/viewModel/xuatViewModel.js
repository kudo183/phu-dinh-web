﻿window.app.viewModel.xuatViewModel = (function () {
    var viewModel = huy.control.dataGrid.createViewModel(window.app.dataProvider.xuatDataProvider, { hasDeleteButton: false });
    viewModel.addColumn({
        headerText: "",
        type: "span",
        cellValueProperty: "text",
        readOnly: false,
        order: 0,
        filterValue: ko.observable()
    });
    viewModel.addCustomFilters([
        {
            type: "comboBox",
            propertyPath: "rKhoHang.Ma",
            itemsSourceName: "khoHangs",
            itemText: "tenKho",
            itemValue: "ma",
            filterValue: ko.observable(1)
        },
        {
            type: "date",
            propertyPath: "Ngay",
            filterValue: ko.observable($.datepicker.formatDate('dd/mm/yy', new Date()))
        },
        {
            type: "comboBox",
            propertyPath: "rKhachHang.Ma",
            itemsSourceName: "khachHangs",
            itemText: "tenKhachHang",
            itemValue: "ma",
            filterValue: ko.observable()
        }
    ]);

    viewModel.init = function () {
        if (viewModel.initialized === true)
            return;

        viewModel.initialized = true;

        viewModel.load(viewModel);
    };

    return viewModel;
})();