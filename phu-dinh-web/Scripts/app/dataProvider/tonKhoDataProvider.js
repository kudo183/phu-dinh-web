window.app.dataProvider.tonKhoDataProvider = (function (datacontext) {
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
        return undefined;
    }

    function setItemId(item, newId) {
    }

    function toEntity(item) {
        return undefined;
    }

    function getItemsAjax(filter, done, fail) {
        filter.orderOptions = [{ propertyPath: "tMatHang.TenMatHangDayDu", isAscending: true }];
        $.when(
            datacontext.tonKho.get(filter),
            datacontext.loaiHang.get({}),
            datacontext.khoHang.get({}),
            datacontext.canhBaoTonKho.get({})
        ).done(function (tonKhos, loaiHangs, khoHangs, canhBaoTonKhos) {
            var canhBaoTonKho = {};
            var data = canhBaoTonKhos[0];
            for (var i = 0; i < data.length; i++) {
                canhBaoTonKho[data[i].maKhoHang] = canhBaoTonKho[data[i].maKhoHang] || {};

                canhBaoTonKho[data[i].maKhoHang][data[i].maMatHang] = {
                    tonCaoNhat: data[i].tonCaoNhat,
                    tonThapNhat: data[i].tonThapNhat,
                };
            }

            var result = {
                items: [],
                totalItemCount: tonKhos[0].TotalItemCount,
                pageIndex: tonKhos[0].PageIndex,
                pageCount: tonKhos[0].PageCount
            };
            for (var i = 0; i < tonKhos[0].length; i++) {
                var item = tonKhos[0][i];
                var css = "";
                
                if (canhBaoTonKho[item.maKhoHang] !== undefined
                    && canhBaoTonKho[item.maKhoHang][item.maMatHang] !== undefined) {
                    
                    var range = canhBaoTonKho[item.maKhoHang][item.maMatHang];
                    var soLuong = item.soLuong;

                    if (soLuong == 0 && range.tonThapNhat == 0)
                        continue;

                    if (soLuong < range.tonThapNhat) {
                        css = "warningLower";
                    } else if (soLuong > range.tonCaoNhat) {
                        css = "warningUpper";
                    }
                }
                
                result.items.push({
                    tenMatHang: ko.observable(item.tenMatHang),
                    soLuong: ko.observable(item.soLuong),
                    css: css
                });
            }

            result.comboBoxItemsSource = {};
            result.comboBoxItemsSource.loaiHangs = loaiHangs[0];
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