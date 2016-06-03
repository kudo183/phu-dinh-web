window.app.dataProvider.xuatDataProvider = (function (datacontext) {
    var dataProvider = {
        _items: [],
        getItemsAjax: getItemsAjax,
    };

    return dataProvider;

    function getItemsAjax(filter, done, fail) {
        filter.orderOptions = [{ propertyPath: "Ngay", isAscending: false }];
        $.when(
            datacontext.xuat.get(filter),
            datacontext.khoHang.get({}),
            datacontext.khachHang.get({})
        ).done(function (xuats, khoHangs, khachHangs) {

            var result = {
                items: [],
                totalItemCount: xuats[0].TotalItemCount,
                pageIndex: xuats[0].PageIndex,
                pageCount: xuats[0].PageCount
            };
            for (var i = 0; i < xuats[0].length; i++) {
                var item = xuats[0][i];
                result.items.push({
                    text: ko.observable(formatItem(item)),
                    css: ko.observable("underlineText")
                });
                for (var j = 0; j < item.chiTietDonHangs.length; j++) {
                    result.items.push({
                        text: ko.observable("\t" + item.chiTietDonHangs[j]),
                        css: ko.observable("")
                    });
                }
            }

            result.comboBoxItemsSource = {};
            result.comboBoxItemsSource.khoHangs = khoHangs[0];
            result.comboBoxItemsSource.khachHangs = khachHangs[0];
            done(result);
        }).fail(fail);
    }
    
    function formatItem(item) {
        return item.tenKho + " | " + new Date(item.ngay).toLocaleDateString() + " | " + item.tenKhachHang; 
    }
})(window.app.datacontext);