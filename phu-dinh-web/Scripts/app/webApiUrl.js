﻿window.app.webApiUrl = (function () {

    var webApiUrl = {
        root: "/api",
        rLoaiHangUrl: rLoaiHangUrl,
        rLoaiHangAction: {
            getrLoaiHangs: "GetrLoaiHangs"
        },
        rKhachHangUrl: rKhachHangUrl,
        rKhachHangAction: {
            getrKhachHangs: "GetrKhachHangs"
        },
        rNhaCungCapUrl: rNhaCungCapUrl,
        rNhaCungCapAction: {
            getrNhaCungCaps: "GetrNhaCungCaps"
        },
        rCanhBaoTonKhoUrl: rCanhBaoTonKhoUrl,
        rCanhBaoTonKhoAction: {
            getrCanhBaoTonKhoes: "GetrCanhBaoTonKhoes"
        },
        tTonKhoUrl: tTonKhoUrl,
        tTonKhoAction: {
            gettTonKhoes: "GettTonKhoes"
        },
        xuatUrl: xuatUrl,
        xuatAction: {
            getXuat: "GetXuat",
            getXuatAsString: "GetXuatAsString",
            getXuatGroupByKhachHangAsString: "GetXuatGroupByKhachHangAsString"
        },
        nhapUrl: nhapUrl,
        nhapAction: {
            getNhapAsString: "GetNhapAsString"
        }
    };
    return webApiUrl;

    // routes
    function rCanhBaoTonKhoUrl(action) { return webApiUrl.root + "/canhbaotonkho/" + action; }
    function rLoaiHangUrl(action) { return webApiUrl.root + "/loaihang/" + action; }
    function rKhachHangUrl(action) { return webApiUrl.root + "/khachhang/" + action; }
    function rNhaCungCapUrl(action) { return webApiUrl.root + "/nhacungcap/" + action; }
    function tTonKhoUrl(action) { return webApiUrl.root + "/tonkho/" + action; }
    function xuatUrl(action) { return webApiUrl.root + "/xuat/" + action; }
    function nhapUrl(action) { return webApiUrl.root + "/nhap/" + action; }
})();