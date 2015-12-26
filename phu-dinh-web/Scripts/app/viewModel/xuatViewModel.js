window.app.viewModel.xuatViewModel = (function (datacontext) {
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
                var fNgay = context.ngay.value();
                if (fNgay !== "") {
                    filter.whereOptions.push({
                        predicate: "=",
                        propertyPath: "Ngay",
                        value: fNgay
                    });
                }
                root.load(filter);
            }
        },
        load: load
    };

    viewModel.content.columns.push({ cellValueProperty: "text" });

    viewModel.filter.action(viewModel);

    return viewModel;
    function load(filter) {
        datacontext.getList("/api/xuat/GetXuatAsString", filter)
        .done(function (data) {
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
        });
    }
})(window.app.datacontext);