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
                totalItemCount: donHangs[0].TotalItemCount,
                pageIndex: donHangs[0].PageIndex,
                pageCount: donHangs[0].PageCount
            };
            for (var i = 0; i < donHangs[0].Items.length; i++) {
                var item = donHangs[0].Items[i];
                result.items.push({
                    ma: ko.observable(item.Ma),
                    ngay: ko.observable(new Date(item.Ngay)),
                    maKhachHang: ko.observable(item.MaKhachHang),
                    maKhoHang: ko.observable(item.MaKhoHang)
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