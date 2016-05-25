window.app.dataProvider.donHangDataProvider = (function (datacontext) {
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
            ngay: ko.unwrap(item.ngay),
            maKhachHang: ko.unwrap(item.maKhachHang),
            maKhoHang: ko.unwrap(item.maKhoHang),
        };
    }

    function getItemsAjax(filter, done, fail) {
        $.when(
            datacontext.donHang.get(filter),
            datacontext.khachHang.get({}),
            datacontext.khoHang.get({})
        ).done(function (donHangs, khachHangs, khoHangs) {
            var result = {
                items: [],
                totalItemCount: donHangs[0].totalItemCount,
                pageIndex: donHangs[0].pageIndex,
                pageCount: donHangs[0].pageCount
            };
            for (var i = 0; i < donHangs[0].items.length; i++) {
                var item = donHangs[0].items[i];
                result.items.push({
                    ma: ko.observable(item.ma),
                    ngay: ko.observable(new Date(item.ngay)),
                    maKhachHang: ko.observable(item.maKhachHang),
                    maKhoHang: ko.observable(item.maKhoHang)
                });
            }

            result.comboBoxItemsSource = {};
            result.comboBoxItemsSource.khachHangs = khachHangs[0];
            result.comboBoxItemsSource.khoHangs = khoHangs[0];
            done(result);
        }).fail(fail);
    }

    function saveChangesAjax(changes, done, fail) {
        datacontext.donHang.save(changes)
            .done(done)
            .fail(fail);
    }
})(window.app.datacontext);