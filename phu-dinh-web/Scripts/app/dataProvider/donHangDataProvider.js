window.app.dataProvider.donHangDataProvider = (function () {
    var dataProvider = {
        _items: [],
        pageSize: 12,
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
        window.app.datacontext.getList(window.app.webApiUrl.donHangApi.get, filter)
            .done(function (data) {
                var result = {
                    items: [],
                    totalItemCount: data.TotalItemCount,
                    pageIndex: data.PageIndex,
                    pageCount: data.PageCount
                };
                for (var i = 0; i < data.Items.length; i++) {
                    var item = data.Items[i];
                    result.items.push({
                        ma: ko.observable(item.Ma),
                        ngay: ko.observable(new Date(item.Ngay)),
                        maKhachHang: ko.observable(item.MaKhachHang),
                        maKhoHang: ko.observable(item.MaKhoHang)
                    });
                }
                done(result);
            })
            .fail(fail);
    }

    function saveChangesAjax(changes, done, fail) {
        window.app.datacontext.saveChanges(changes, window.app.webApiUrl.donHangApi.save)
            .done(done)
            .fail(fail);
    }
})();