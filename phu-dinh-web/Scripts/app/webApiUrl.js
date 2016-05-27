window.app.webApiUrl = (function () {

    var webApiUrl = {
        root: "/api",
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
        },
        xuatApi: {
            get: api("xuat", "get"),
            getByKhachHang: api("xuat", "getByKhachHang")
        },
        nhaCungCapApi: {
            get: api("nhaCungCap", "get")
        },
        nhapApi: {
            get: api("nhap", "get")
        }
    };
    return webApiUrl;

    // routes

    function api(controllder, action) { return "/api" + "/" + controllder + "/" + action; }
    function rNhaCungCapUrl(action) { return webApiUrl.root + "/nhacungcap/" + action; }
    function nhapUrl(action) { return webApiUrl.root + "/nhap/" + action; }
})();