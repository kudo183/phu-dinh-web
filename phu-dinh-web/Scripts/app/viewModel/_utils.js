window.app.viewModel.utils = (function () {
    var utils = {
        setCurrentViewModel: setCurrentViewModel,
        initCurrentViewModel: initCurrentViewModel,
        loadCurrentViewModel: loadCurrentViewModel,
        currentViewModel: undefined
    };
    return utils;

    function setCurrentViewModel(viewId) {
        utils.currentViewModel = window.app.viewModel[viewId + "Model"];
    }

    function initCurrentViewModel() {
        return utils.currentViewModel.init();
    }

    function loadCurrentViewModel() {
        return utils.currentViewModel.load();
    }
})();