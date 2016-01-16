window.app.viewModel.nhapViewModel = (function (datacontext, api) {
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
                    },
                    {
                        maKho: 3,
                        tenKho: "DucHoa"
                    }
                ],
                itemText: "tenKho",
                itemValue: "maKho",
                value: ko.observable(1),
            },
            ngay: {
                value: ko.observable($.datepicker.formatDate('dd/mm/yy', new Date()))
            },
            nhaCungCap: {
                caption: "...",
                items: ko.observableArray(),
                itemText: "tenNhaCungCap",
                itemValue: "ma",
                value: ko.observable()
            },
        },
        load: load,
        init: init,
        initialized: false,
        isLoading: ko.observable(false)
    };

    viewModel.content.columns.push({ cellValueProperty: "text" });

    viewModel.filter.kho.value.subscribe(load);
    viewModel.filter.ngay.value.subscribe(load);
    viewModel.filter.nhaCungCap.value.subscribe(load);

    return viewModel;

    function init() {
        if (viewModel.initialized === true)
            return;

        window.app.view.utils.appendViewToContainer(
            window.app.view.mainContentID, "nhapView", viewModel, "nhapView");

        datacontext.getList(api.rNhaCungCapUrl(api.rNhaCungCapAction.getrNhaCungCaps))
            .done(function (data) {
                var items = [];
                for (var i = 0; i < data.length; i++) {
                    items.push(data[i]);
                }
                viewModel.filter.nhaCungCap.items(items);
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
        datacontext.getList(api.nhapUrl(api.nhapAction.getNhapAsString), filter)
        .done(loadDone);
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
        var fNgay = context.ngay.value();
        if (fNgay !== "") {
            filter.whereOptions.push({
                predicate: "=",
                propertyPath: "Ngay",
                value: fNgay
            });
        }
        var fNhaCungCap = context.nhaCungCap.value();
        if (fNhaCungCap !== undefined) {
            filter.whereOptions.push({
                predicate: "=",
                propertyPath: "rNhaCungCap.ma",
                value: fNhaCungCap
            });
        }

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
})(window.app.datacontext, window.app.webApiUrl);