window.app.dateTimeUtils = (function () {

    var dateTimeUtils = {
        getCurrentDate: getCurrentDate
    };
    return dateTimeUtils;

    function getCurrentDate() {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
    }
})();