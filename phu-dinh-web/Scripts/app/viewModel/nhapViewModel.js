window.app.viewModel.nhapViewModel = (function () {
    var viewModel = huy.control.dataGrid.createViewModel(window.app.dataProvider.nhapDataProvider, { hasDeleteButton: false });
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
            propertyPath: "rNhaCungCap.Ma",
            itemsSourceName: "nhaCungCaps",
            itemText: "tenNhaCungCap",
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