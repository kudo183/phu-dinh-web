window.app.view.tonKhoView = (function () {

    return function(id) {
        var filter = window.app.utilsDOM.createElement("div", { id: "filter" }, "with: filter");
        var koKho = window.app.utilsDOM.createComment(" ko with: kho ");
        var selectKho = window.app.utilsDOM.createElement("select", { }, "optionsCaption: caption, options: items, optionsText: itemText, optionsValue: itemValue, value: selected");
        var endKoKho = window.app.utilsDOM.createComment(" /ko ");
        var koLoaiHang = window.app.utilsDOM.createComment(" ko with: loaiHang ");
        var selectLoaiHang = window.app.utilsDOM.createElement("select", { }, "optionsCaption: caption, options: items, optionsText: itemText, optionsValue: itemValue, value: selected");
        var endKoLoaiHang = window.app.utilsDOM.createComment(" /ko ");
        var buttonOk = window.app.utilsDOM.createElement("button", { }, "click: function (data, event) { load($parent, data, event) }", "OK");

        var gridViewModel = window.app.utilsDOM.createElement("div", { id: "contentGrid" }, "with: gridViewModel");
        var koItems = window.app.utilsDOM.createComment(" ko foreach: items ");
        var row = window.app.utilsDOM.createElement("div", {}, "foreach: $parent.columns");
        window.app.utilsDOM.addClass(row, "row");
        var cell = window.app.utilsDOM.createElement("div", {});
        window.app.utilsDOM.addClass(cell, "cell");
        var cellText = window.app.utilsDOM.createElement("span", { }, "text: $parent[cellValueProperty]");
        var endKoItems = window.app.utilsDOM.createComment(" /ko ");

        filter.appendChild(koKho);
        filter.appendChild(selectKho);
        filter.appendChild(endKoKho);
        filter.appendChild(koLoaiHang);
        filter.appendChild(selectLoaiHang);
        filter.appendChild(endKoLoaiHang);
        filter.appendChild(buttonOk);

        gridViewModel.appendChild(koItems);
        gridViewModel.appendChild(row);
        row.appendChild(cell);
        cell.appendChild(cellText);
        gridViewModel.appendChild(endKoItems);

        var view = window.app.utilsDOM.createElement("div", { id: id }, "with: tonKhoViewModel");
        view.appendChild(filter);
        view.appendChild(gridViewModel);
        return view;
    };
})();