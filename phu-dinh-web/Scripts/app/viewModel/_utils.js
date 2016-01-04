window.app.viewModel.utils = (function () {
    var utils = {
        getViewModel: getViewModel,
        initViewModel: initViewModel
    };
    return utils;
    
    function getViewModel(viewId) {
        return window.app.viewModel[viewId.replace("#", "") + "Model"];
    }
    
    function initViewModel(viewId) {
        getViewModel(viewId).init();
    }
})();