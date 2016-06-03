window.app.viewModel.donHangWithChiTietDonHangViewModel = (function () {
    var viewModel = {
        donHangViewModel: window.app.viewModel.donHangViewModel,
        chiTietDonHangViewModel: window.app.viewModel.chiTietDonHangViewModel,
        init: function () {
            if (viewModel.initialized === true)
                return;

            viewModel.initialized = true;
            this.donHangViewModel.init();
            this.chiTietDonHangViewModel.init();

            this.load(this);
        },
        load: function (vm) {
            vm.donHangViewModel.load(vm.donHangViewModel);
            vm.chiTietDonHangViewModel.load(vm.chiTietDonHangViewModel);
        }
    };
    viewModel.donHangViewModel.currentSelectedItem.subscribe(function(item) {
        viewModel.chiTietDonHangViewModel._columns[2].filterValue(ko.unwrap(item.ma));
    });
    return viewModel;
})();