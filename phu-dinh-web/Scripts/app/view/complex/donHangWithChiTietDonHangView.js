window.app.view.donHangWithChiTietDonHangView = (function () {
    return function (id) {
        var view = window.huy.control.utilsDOM.createElement("div", { id: id });
        view.appendChild(window.huy.control.utilsDOM.createComment("ko with: donHangViewModel"));
        var dh = window.huy.control.dataGrid.createView("");
        window.huy.control.utilsDOM.addClass(dh, "donHangView");
        view.appendChild(dh);
        view.appendChild(window.huy.control.utilsDOM.createComment("/ko"));
        view.appendChild(window.huy.control.utilsDOM.createComment("ko with: chiTietDonHangViewModel"));
        var ctdh = window.huy.control.dataGrid.createView("");
        window.huy.control.utilsDOM.addClass(ctdh, "chiTietDonHangView");
        view.appendChild(ctdh);
        view.appendChild(window.huy.control.utilsDOM.createComment("/ko"));
        return view;
    };
})();