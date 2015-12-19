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
                selected: ko.observable(1)
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
                var filter = {};
                filter.whereOptions = [];
                var fKho = context.kho.selected();
                if (fKho !== undefined) {
                    filter.whereOptions.push({
                        predicate: "=",
                        propertyPath: "rKhoHang.ma",
                        value: fKho
                    });
                }
                var fLoaiHang = context.loaiHang.selected();
                if (fLoaiHang !== undefined) {
                    filter.whereOptions.push({
                        predicate: "=",
                        propertyPath: "tMatHang.MaLoai",
                        value: fLoaiHang
                    });
                }
                root.load(filter);
            }
        },
        load: load
    };

    viewModel.gridViewModel.columns.push({ cellValueProperty: "tenMatHang" });
    viewModel.gridViewModel.columns.push({ cellValueProperty: "soLuong" });

    datacontext.getList(datacontext.rLoaiHangUrl("GetrLoaiHangs"))
        .done(function (data) {
            var items = [];
            for (var i = 0; i < data.length; i++) {
                items.push(data[i]);
            }
            viewModel.filter.loaiHang.items(items);
        }).fail(function (error) {
            alert(error);
        });

    function load(filter) {
        datacontext.getList(datacontext.tTonKhoUrl("GettTonKhoes"), filter)
        .done(function (data) {
            var items = [];
            for (var i = 0; i < data.length; i++) {
                items.push(data[i]);
            }
            viewModel.gridViewModel.items(items);
        }).fail(function (error) {
            alert(error);
        });
    }

    load();
    return viewModel;
})(window.app.datacontext);
ko.applyBindings(window.app.viewModel);