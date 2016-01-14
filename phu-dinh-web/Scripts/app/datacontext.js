﻿window.app.datacontext = (function () {

    var datacontext = {
        getList: getList,
        saveChanges: saveChanges
    };
    return datacontext;

    function getList(url, filter) {
        filter = filter || { };
        var options = {
            dataType: "json",
            contentType: "application/json",
            cache: false,
            type: "get",
            data:"json=" + JSON.stringify(filter)
        };
            
        var antiForgeryToken = $("#antiForgeryToken").val();
        if (antiForgeryToken) {
            options.headers = {
                'RequestVerificationToken': antiForgeryToken
            };
        }
        return $.ajax(url, options);
    }

    function saveChanges(changes, url) {
        var options = {
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            cache: false,
            type: "post",
            data: "=" + JSON.stringify(changes)
        };
        var antiForgeryToken = $("#antiForgeryToken").val();
        if (antiForgeryToken) {
            options.headers = {
                'RequestVerificationToken': antiForgeryToken
            };
        }
        return $.ajax(url, options);
    }
})();