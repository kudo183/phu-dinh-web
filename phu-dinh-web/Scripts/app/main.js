$("body").append('<div id="headerContent"></div>');
$("body").append('<div id="mainContent"></div>');
$("#headerContent").append(window.app.view.headerMenuView("headerMenuView", [
                { text: "Ton Kho", attr: { viewId: "#tonKhoView" } },
                { text: "Xuat", attr: { viewId: "#xuatView" } },
                { text: "Nhap", attr: { viewId: "#nhapView" } },
                { text: "Khach Hang", attr: { viewId: "#khachHangView" } },
                { text: "Tai Khoan", attr: { href: "/Account/Manage" } },
                { text: "Thoat", attr: { id: "logOff" } }
]));

window.app.view.mainContentID = "#mainContent";