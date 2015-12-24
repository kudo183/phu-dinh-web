window.app.view.utils = (function () {
    var utils = {
        createReadOnlyGridView: createReadOnlyGridView
    };
    return utils;
    
    function createReadOnlyGridView(id, modelName) {
        var gridViewModel = window.app.utilsDOM.createElement("div", {}, "with: gridViewModel");
        var koItems = window.app.utilsDOM.createComment(" ko foreach: items ");
        var row = window.app.utilsDOM.createElement("div", {}, "foreach: $parent.columns");
        window.app.utilsDOM.addClass(row, "row");
        var cell = window.app.utilsDOM.createElement("div", {});
        window.app.utilsDOM.addClass(cell, "cell");
        var cellText = window.app.utilsDOM.createElement("span", {}, "text: $parent[cellValueProperty]");
        var endKoItems = window.app.utilsDOM.createComment(" /ko ");

        gridViewModel.appendChild(koItems);
        gridViewModel.appendChild(row);
        row.appendChild(cell);
        cell.appendChild(cellText);
        gridViewModel.appendChild(endKoItems);

        var view = window.app.utilsDOM.createElement("div", { id: id }, "with: " + modelName);
        view.appendChild(gridViewModel);
        return view;
    };
})();