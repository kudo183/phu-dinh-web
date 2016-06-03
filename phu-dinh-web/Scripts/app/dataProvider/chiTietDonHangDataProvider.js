window.app.dataProvider.chiTietDonHangDataProvider = (function (datacontext) {
    var dataProvider = {
        _items: [],
        getItemId: getItemId,
        setItemId: setItemId,
        toEntity: toEntity,
        getItemsAjax: getItemsAjax,
        saveChangesAjax: saveChangesAjax
    };

    return dataProvider;

    function getItemId(item) {
        return item.ma;
    }

    function setItemId(item, newId) {
        item.ma(newId);
    }

    function toEntity(item) {
        return {
            ma: ko.unwrap(item.ma),
            maDonHang: ko.unwrap(item.maDonHang),
            maMatHang: ko.unwrap(item.maMatHang),
            soLuong: ko.unwrap(item.soLuong),
        };
    }

    function getItemsAjax(filter, done, fail) {
        $.when(
            datacontext.chiTietDonHang.get(filter),
            datacontext.matHang.get({})
        ).done(function (chiTietDonHangs, matHangs) {
            var result = {
                items: [],
                totalItemCount: chiTietDonHangs[0].totalItemCount,
                pageIndex: chiTietDonHangs[0].pageIndex,
                pageCount: chiTietDonHangs[0].pageCount
            };
            for (var i = 0; i < chiTietDonHangs[0].items.length; i++) {
                var item = chiTietDonHangs[0].items[i];
                result.items.push({
                    ma: ko.observable(item.ma),
                    maDonHang: ko.observable(item.maDonHang),
                    tenDonHang: ko.observable(item.tenDonHang),
                    maMatHang: ko.observable(item.maMatHang),
                    soLuong: ko.observable(item.soLuong)
                });
            }

            result.comboBoxItemsSource = {};
            result.comboBoxItemsSource.matHangs = matHangs[0];
            done(result);
        }).fail(fail);
    }

    function saveChangesAjax(changes, done, fail) {
        datacontext.chiTietDonHang.save(changes)
            .done(done)
            .fail(fail);
    }
})(window.app.datacontext);