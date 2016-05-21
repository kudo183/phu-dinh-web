window.app.view.viewManager = (function () {

    var viewManager = {
        init: init,
        setCurrentView: setCurrentView,
        loadCurrentView: loadCurrentView,
        _appendCurrentViewToMainContent: appendCurrentViewToMainContent,
        _headerMenuViewModel: {},
        _currentViewName: "",
        _currentViewModel: {},
        _mainContentId: "",
        _isSkipPushState: false
    };
    return viewManager;

    function init(headerContentId, mainContentId) {

        var headerMenuViewModel = {
            items: [
                { text: "Ton Kho", value: "tonKhoView", id: "" },
                { text: "Xuat", value: "xuatView", id: "" },
                { text: "Nhap", value: "nhapView", id: "" },
                { text: "Khach Hang", value: "khachHangView", id: "" },
                { text: "Don Hang", value: "donHangView", id: "" },
                //{ text: "Tai Khoan", value: "/Account/Manage", id: "" },
                //{ text: "Thoat", value: "logOff", id: "" }
            ],
            selectedItemText: ko.observable("Ton Kho"),
            selectedItemValue: ko.observable(),
            buttons: [
                {
                    id: "refreshButton",
                    action: function () {
                        viewManager.loadCurrentView();
                    }
                }
            ]
        };
        this._headerMenuViewModel = headerMenuViewModel;
        this._mainContentId = mainContentId;
        
        $(headerContentId).append(window.app.view.headerMenuView("headerMenuView", headerMenuViewModel));

        headerMenuViewModel.selectedItemValue.subscribe(handleMenuSelectedItemChanged);

        window.onpopstate = function (event) {
            viewManager.setSelectedView(event.state.selectedView);
            console.log("onpopstate: " + JSON.stringify(event.state));
        };
    }

    function handleMenuSelectedItemChanged(selectedItemValue) {
        $("#" + viewManager._currentViewName).hide();
        viewManager._currentViewName = selectedItemValue;

        viewManager._currentViewModel = window.app.viewModel[viewManager._currentViewName + "Model"];
        if (viewManager._currentViewModel.initialized === undefined
            || viewManager._currentViewModel.initialized === false) {
            viewManager._appendCurrentViewToMainContent();
            viewManager._currentViewModel.init();
        }

        $("#" + viewManager._currentViewName).show();

        if (viewManager._isSkipPushState === false) {
            window.history.pushState({ selectedView: selectedItemValue }, "", "?v=" + selectedItemValue);
            console.log("pushState: " + JSON.stringify(selectedItemValue));
        }
    }
    
    function appendCurrentViewToMainContent() {
        var view = window.app.view[this._currentViewName](this._currentViewName);
        $(this._mainContentId).append(view);
        ko.applyBindings(this._currentViewModel, view);
    }

    function setCurrentView(selectedView) {
        var selectedIndex = findSelectedItemValueIndex(selectedView, this._headerMenuViewModel.items);
        this._isSkipPushState = true;
        this._headerMenuViewModel.selectedItemText(this._headerMenuViewModel.items[selectedIndex].text);
        this._headerMenuViewModel.selectedItemValue(this._headerMenuViewModel.items[selectedIndex].value);
        this._isSkipPushState = false;
    }

    function loadCurrentView() {
        viewManager._currentViewModel.load(viewManager._currentViewModel);
    }

    function findSelectedItemValueIndex(selectedItemValue, items) {
        var selectedIndex = 0;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.value === selectedItemValue) {
                selectedIndex = i;
                break;
            }
        }
        return selectedIndex;
    }
})();