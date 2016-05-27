window.app.dataProvider.nhapDataProvider = (function (datacontext) {
    var dataProvider = {
        _items: [],
        getItemsAjax: getItemsAjax,
    };

    return dataProvider;

    function getItemsAjax(filter, done, fail) {
        filter.orderOptions = [{ propertyPath: "Ngay", isAscending: false }];
        $.when(
            datacontext.nhap.get(filter),
            datacontext.khoHang.get({}),
            datacontext.nhaCungCap.get({})
        ).done(function (nhaps, khoHangs, nhaCungCaps) {

            var result = {
                items: [],
                totalItemCount: nhaps[0].TotalItemCount,
                pageIndex: nhaps[0].PageIndex,
                pageCount: nhaps[0].PageCount
            };
            for (var i = 0; i < nhaps[0].length; i++) {
                var item = nhaps[0][i];
                result.items.push({
                    text: ko.observable(formatItem(item)),
                    css: "underlineText"
                });
                for (var j = 0; j < item.chiTietNhapHangs.length; j++) {
                    result.items.push({
                        text: ko.observable("\t" + item.chiTietNhapHangs[j]),
                        css: ""
                    });
                }
            }

            result.comboBoxItemsSource = {};
            result.comboBoxItemsSource.khoHangs = khoHangs[0];
            result.comboBoxItemsSource.nhaCungCaps = nhaCungCaps[0];
            done(result);
        }).fail(fail);
    }

    function formatItem(item) {
        return item.tenKho + " | " + new Date(item.ngay).toLocaleDateString() + " | " + item.tenNhaCungCap;
    }
})(window.app.datacontext);