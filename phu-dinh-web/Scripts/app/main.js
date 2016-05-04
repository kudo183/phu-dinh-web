$("body").append('<div id="headerContent"></div>');
$("body").append('<div id="mainContent"></div>');

window.app.view.mainContentID = "#mainContent";

var headerMenuViewModel = {
    items: [
        { text: "Ton Kho", value: "tonKhoView", id: "" },
        { text: "Xuat", value: "xuatView", id: "" },
        { text: "Nhap", value: "nhapView", id: "" },
        { text: "Khach Hang", value: "khachHangView", id: "" },
        //{ text: "Tai Khoan", value: "/Account/Manage", id: "" },
        //{ text: "Thoat", value: "logOff", id: "" }
    ],
    selectedItemText: ko.observable("Ton Kho"),
    selectedItemValue: ko.observable(),
    buttons: [
        {
            id: "refreshButton",
            action: function () {
                window.app.viewModel.utils.loadCurrentViewModel();
            }
        }
    ],
    _previousSelectedItemValue: {}
};

$("#headerContent").append(window.app.view.headerMenuView("headerMenuView", headerMenuViewModel));

headerMenuViewModel.selectedItemValue.subscribe(function (selectedItemValue) {
    $(headerMenuViewModel._previousSelectedItemValue).hide();
    headerMenuViewModel._previousSelectedItemValue = "#" + selectedItemValue;

    window.app.viewModel.utils.setCurrentViewModel(selectedItemValue);
    window.app.viewModel.utils.initCurrentViewModel();

    $("#" + selectedItemValue).show();
});

headerMenuViewModel.selectedItemText(headerMenuViewModel.items[0].text);
headerMenuViewModel.selectedItemValue(headerMenuViewModel.items[0].value);