window.app.viewModel.khachHangViewModel = (function (datacontext) {
    var viewModel = {
        content: {
            items: ko.observableArray(),
            columns: []
        },
        filter: {
            khachHang: {
                caption: "...",
                items: ko.observableArray(),
                itemText: "tenKhachHang",
                itemValue: "ma",
                value: ko.observable()
            },
            ngay: {
                value: ko.observable($.datepicker.formatDate('dd/mm/yy', new Date())),
                isDisabled: ko.observable(false)
            }
        },
        load: load,
        init: init,
        initialized: false,
        isLoading: ko.observable(false)
    };

    viewModel.content.columns.push({ cellValueProperty: "text" });

    viewModel.filter.khachHang.value.subscribe(load);
    viewModel.filter.ngay.value.subscribe(load);
    viewModel.filter.ngay.isDisabled.subscribe(load);

    return viewModel;

    function init() {
        if (viewModel.initialized === true)
            return;

        window.app.view.utils.appendViewToContainer(
            window.app.view.mainContentID, "khachHangView", viewModel, "khachHangView");
        
        datacontext.getList(datacontext.rKhachHangUrl("GetrKhachHangs"))
            .done(function (data) {
                var items = [];
                for (var i = 0; i < data.length; i++) {
                    items.push(data[i]);
                }
                viewModel.filter.khachHang.items(items);
            }).fail(function (error) {
                alert(error);
            });

        load();
        viewModel.initialized = true;
    }

    //return void
    function load() {
        var filter = createFilter();
        viewModel.isLoading(true);
        datacontext.getList("/api/xuat/GetXuatGroupByKhachHangAsString", filter)
        .done(loadDone);
    }

    //return filter
    function createFilter() {
        var context = viewModel.filter;
        var filter = {};
        filter.whereOptions = [];
        var fKhachHang = context.khachHang.value();
        if (fKhachHang !== undefined) {
            filter.whereOptions.push({
                predicate: "=",
                propertyPath: "rKhachHang.ma",
                value: fKhachHang
            });
        }
        var fNgay = context.ngay.value();
        if (context.ngay.isDisabled() === false && fNgay !== "") {
            filter.whereOptions.push({
                predicate: "=",
                propertyPath: "Ngay",
                value: fNgay
            });
        }
        filter.orderOptions = [{ propertyPath: "Ngay", isAscending: false }];
        return filter;
    }

    //return void
    function loadDone(data) {
        var items = [];
        for (var i = 0; i < data.length; i++) {
            var length = Number(data[i]);
            var end = length + i;
            items.push({ text: data[i + 1], css: "underlineText" });
            i++;
            for (; i < end; i++) {
                items.push({ text: "\t" + data[i + 1], css: "" });
            }
        }
        viewModel.content.items(items);
        viewModel.isLoading(false);
    }
})(window.app.datacontext);