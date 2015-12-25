window.app.viewModel.tonKhoViewModel = (function (datacontext) {
    var viewModel = {
        content: {
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
                value: ko.observable(1)
            },
            loaiHang: {
                caption: "...",
                items: ko.observableArray(),
                itemText: "tenLoai",
                itemValue: "ma",
                value: ko.observable()
            },
            ngay: {
                value: ko.observable($.datepicker.formatDate('dd/mm/yy', new Date()))
            },
            action: function (root) {
                var context = root.filter;
                var filter = {};
                filter.whereOptions = [];
                var fKho = context.kho.value();
                if (fKho !== undefined) {
                    filter.whereOptions.push({
                        predicate: "=",
                        propertyPath: "rKhoHang.ma",
                        value: fKho
                    });
                }
                var fLoaiHang = context.loaiHang.value();
                if (fLoaiHang !== undefined) {
                    filter.whereOptions.push({
                        predicate: "=",
                        propertyPath: "tMatHang.MaLoai",
                        value: fLoaiHang
                    });
                }
                var fNgay = context.ngay.value();
                if (fNgay !== "") {
                    filter.whereOptions.push({
                        predicate: "=",
                        propertyPath: "Ngay",
                        value: fNgay
                    });
                }
                filter.orderOptions = [{ propertyPath: "tMatHang.TenMatHangDayDu", isAscending: true }];
                root.load(filter);
            }
        },
        load: load
    };

    viewModel.content.columns.push({ cellValueProperty: "tenMatHang" });
    viewModel.content.columns.push({ cellValueProperty: "soLuong" });

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

    viewModel.filter.action(viewModel);

    return viewModel;

    function load(filter) {
        datacontext.getList(datacontext.tTonKhoUrl("GettTonKhoes"), filter)
        .done(function (data) {
            var items = [];
            for (var i = 0; i < data.length; i++) {
                items.push(data[i]);
            }
            viewModel.content.items(items);
        }).fail(function (error) {
            alert(error);
        });
    }

})(window.app.datacontext);