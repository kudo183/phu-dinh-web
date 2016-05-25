window.app.webApiUrl = (function () {

    var webApiUrl = {
        root: "/api",
        rNhaCungCapUrl: rNhaCungCapUrl,
        rNhaCungCapAction: {
            getrNhaCungCaps: "GetrNhaCungCaps"
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
        },
        donHangApi: {
            get: api("donHang", "get"),
            save: api("donHang", "save")
        },
        khachHangApi: {
            get: api("khachHang", "get")
        },
        khoHangApi: {
            get: api("khoHang", "get")
        },
        tonKhoApi: {
            get: api("tonKho", "get")
        },
        loaiHangApi: {
            get: api("loaiHang", "get")
        },
        canhBaoTonKhoApi: {
            get: api("canhBaoTonKho", "get")
        }
    };
    return webApiUrl;

    // routes

    function api(controllder, action) { return "/api" + "/" + controllder + "/" + action; }
    function rNhaCungCapUrl(action) { return webApiUrl.root + "/nhacungcap/" + action; }
    function xuatUrl(action) { return webApiUrl.root + "/xuat/" + action; }
    function nhapUrl(action) { return webApiUrl.root + "/nhap/" + action; }
})();