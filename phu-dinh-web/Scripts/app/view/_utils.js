﻿window.app.view.utils = (function () {
    var utils = {
        createReadOnlyGridView: createReadOnlyGridView
    };
    return utils;

    function createReadOnlyGridView(id, modelName, filter, style) {
        var view = window.app.utilsDOM.createElement("div", { id: id }, "with: " + modelName);
        view.appendChild(createFilter(filter));
        view.appendChild(createGridViewContent(style));
        $(view).hide();
        return view;
    };

    function createGridViewContent(style) {
        var view = window.app.utilsDOM.createElement("div", {}, "with: content");
        var koItems = window.app.utilsDOM.createComment(" ko foreach: items ");
        var row;
        if (style === "row") {
            row = window.app.utilsDOM.createElement("div", {}, "foreach: $parent.columns, css: css");
        } else {
            row = window.app.utilsDOM.createElement("div", {}, "foreach: $parent.columns");
        }
        window.app.utilsDOM.addClass(row, "row");
        var cell = window.app.utilsDOM.createElement("div", {});
        window.app.utilsDOM.addClass(cell, "cell");
        var cellText = window.app.utilsDOM.createElement("span", {}, "text: $parent[cellValueProperty]");
        var endKoItems = window.app.utilsDOM.createComment(" /ko ");

        view.appendChild(koItems);
        view.appendChild(row);
        row.appendChild(cell);
        cell.appendChild(cellText);
        view.appendChild(endKoItems);

        return view;
    }

    function createFilter(filter) {
        var view = window.app.utilsDOM.createElement("div", {}, "with: filter");
        for (var i = 0; i < filter.length; i++) {
            appandFilter(view, filter[i].type, filter[i].name);
        }

        return view;
    }

    function appandFilter(container, tag, binding) {
        container.appendChild(window.app.utilsDOM.createComment((" ko with: {0} ").replace("{0}", binding)));
        if (tag === "select") {
            container.appendChild(window.app.utilsDOM.createElement("select", {},
                "disable: $parents[1].isLoading, options: items, optionsText: itemText, optionsValue: itemValue, value: value"));
        } else if (tag === "selectAllowBlank") {
            container.appendChild(window.app.utilsDOM.createElement("select", {},
                "disable: $parents[1].isLoading, optionsCaption: caption, options: items, optionsText: itemText, optionsValue: itemValue, value: value"));
        } else if (tag === "date") {
            container.appendChild(window.app.utilsDOM.createElement("input", { type: "text", readOnly: "readOnly" },
                "disable: $parents[1].isLoading, value: value", undefined, "datePicker"));
        } else if (tag === "dateAllowBlank") {
            container.appendChild(createAllowBlankDateInput());
        }
        container.appendChild(window.app.utilsDOM.createComment(" /ko "));
    }

    function createAllowBlankDateInput() {
        var div = window.app.utilsDOM.createElement("div");
        div.appendChild(window.app.utilsDOM.createElement("input", { type: "text", readOnly: "readOnly" },
                "disable: (isDisabled() || $parents[1].isLoading()), value: value", undefined, "datePicker"));
        div.appendChild(window.app.utilsDOM.createElement("input", { type: "checkbox" }, "checked: isDisabled"));

        return div;
    }
})();