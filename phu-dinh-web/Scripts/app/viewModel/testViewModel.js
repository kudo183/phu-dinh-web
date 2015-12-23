window.app.viewModel.testViewModel = (function (datacontext) {
    var viewModel = {
        gridViewModel: {
            items: ko.observableArray([
                { tenMatHang: "Mat hang 1", soLuong: 1 },
                { tenMatHang: "Mat hang 2", soLuong: 2 },
                { tenMatHang: "Mat hang 3", soLuong: 3 }
            ]),
            columns: []
        }
    };

    viewModel.gridViewModel.columns.push({ cellValueProperty: "tenMatHang" });
    viewModel.gridViewModel.columns.push({ cellValueProperty: "soLuong" });
    //viewModel.gridViewModel.items.push();
    return viewModel;
})(window.app.datacontext);