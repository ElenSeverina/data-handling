"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// createUserTable();
// createUserTableHeader();
// createUserTableRow();
// createErrorField();
// normalizeData();
// removeUserTable();
// removeErrorField();
// buttonClickHandler();
var button = document.querySelector('.btn');
button.onclick = function () {
    var loader = document.querySelector('.loader');
    button.style.color = 'transparent';
    loader.style.display = 'block';
    setTimeout(function () {
        loader.style.display = 'none';
        button.style.color = 'black';
    }, 3000);
};
