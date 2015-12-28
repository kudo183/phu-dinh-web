window.app.viewModel.tonKhoViewModel = (function (datacontext) {
    var viewModel = {
        content: {
            items: ko.observableArray(),
            columns: []
        },
        filter: {
            kho: {
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
            }
        },
        canhBaoTonKho: {},
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

    datacontext.getList(datacontext.rCanhBaoTonKhoUrl("GetrCanhBaoTonKhoes"))
        .done(function (data) {
            for (var i = 0; i < data.length; i++) {
                viewModel.canhBaoTonKho[data[i].maKhoHang] = viewModel.canhBaoTonKho[data[i].maKhoHang] || {};

                viewModel.canhBaoTonKho[data[i].maKhoHang][data[i].maMatHang] = {
                    tonCaoNhat: data[i].tonCaoNhat,
                    tonThapNhat: data[i].tonThapNhat,
                };
            }
        }).fail(function (error) {
            alert(error);
        });

    load();

    viewModel.filter.kho.value.subscribe(load);
    viewModel.filter.loaiHang.value.subscribe(load);
    viewModel.filter.ngay.value.subscribe(load);
    
    return viewModel;

    //return void
    function load() {
        var filter = createFilter();
        
        datacontext.getList(datacontext.tTonKhoUrl("GettTonKhoes"), filter)
        .done(loadDone).fail(function (error) {
            alert(error);
        });
    }

    //return filter
    function createFilter() {
        var context = viewModel.filter;
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

        return filter;
    }
    
    //return void
    function loadDone (data) {
        var items = [];
        for (var i = 0; i < data.length; i++) {
            if (viewModel.canhBaoTonKho[data[i].maKhoHang] === undefined
            || viewModel.canhBaoTonKho[data[i].maKhoHang][data[i].maMatHang] === undefined) {
                data[i].css = "";
                items.push(data[i]);
                continue;
            }

            var range = viewModel.canhBaoTonKho[data[i].maKhoHang][data[i].maMatHang];
            var soLuong = data[i].soLuong;
                
            if (soLuong == 0 && range.tonThapNhat == 0)
                continue;
                
            if (soLuong < range.tonThapNhat) {
                data[i].css = "warningLower";
            } else if (soLuong > range.tonCaoNhat) {
                data[i].css = "warningUpper";
            } else {
                data[i].css = "";
            }
            items.push(data[i]);
        }
        viewModel.content.items(items);
    }
})(window.app.datacontext);