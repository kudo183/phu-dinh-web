window.app.viewModel = (function (datacontext) {
    var viewModel = {
        gridViewModel: {
            items: ko.observableArray(),
            columns: []
        },
        filter: {
            kho: {
                caption: "...",
                items: [
                    {
                        maKho: 1,
                        tenKho: "PhuDinh"
                    }
                ],
                itemText: "tenKho",
                itemValue: "maKho",
                selected: ko.observable()
            },
            loaiHang: {
                caption: "...",
                items: ko.observableArray(),
                itemText: "tenLoai",
                itemValue: "ma",
                selected: ko.observable()
            },
            load: function (root) {
                var context = root.filter;
                alert(context.kho.selected());
                alert(context.loaiHang.selected());
                root.load();
            }
        },
        load: load
    };

    viewModel.gridViewModel.columns.push({ cellValueProperty: "tenMatHang" });
    viewModel.gridViewModel.columns.push({ cellValueProperty: "soLuong" });

    datacontext.getList(datacontext.rLoaiHangUrl("GetrLoaiHangs"))
        .done(function (data) {
            for (var i = 0; i < data.length; i++) {
                viewModel.filter.loaiHang.items.push(data[i]);
            }
        }).fail(function (error) {
            alert(error);
        });

    function load(filter) {
        datacontext.getList(datacontext.tTonKhoUrl("GettTonKhoes"), filter)
        .done(function (data) {
            for (var i = 0; i < data.length; i++) {
                viewModel.gridViewModel.items.push(data[i]);
            }
        }).fail(function (error) {
            alert(error);
        });
    }

    load();
    return viewModel;
})(window.app.datacontext);
ko.applyBindings(window.app.viewModel);