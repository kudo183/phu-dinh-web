window.app.webApiUrl = (function () {

    var webApiUrl = {
        root: "/api",
        rLoaiHangUrl: rLoaiHangUrl,
        rLoaiHangAction: {
            getrLoaiHangs: "GetrLoaiHangs"
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
        }
    };
    return webApiUrl;

    // routes

    function api(controllder, action) { return "/api" + "/" + controllder + "/" + action; }
    function rCanhBaoTonKhoUrl(action) { return webApiUrl.root + "/canhbaotonkho/" + action; }
    function rLoaiHangUrl(action) { return webApiUrl.root + "/loaihang/" + action; }
    function rNhaCungCapUrl(action) { return webApiUrl.root + "/nhacungcap/" + action; }
    function tTonKhoUrl(action) { return webApiUrl.root + "/tonkho/" + action; }
    function xuatUrl(action) { return webApiUrl.root + "/xuat/" + action; }
    function nhapUrl(action) { return webApiUrl.root + "/nhap/" + action; }
})();