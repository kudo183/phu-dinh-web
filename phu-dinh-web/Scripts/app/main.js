(function (viewManager) {
    
    $("body").append('<div id="headerContent"></div>');
    $("body").append('<div id="mainContent"></div>');

    viewManager.init("#headerContent", "#mainContent");
    viewManager.setCurrentView(window._selectedView);
    
})(window.app.view.viewManager);