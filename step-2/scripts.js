/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../step-1/ts/script.ts":
/*!******************************!*\
  !*** ../step-1/ts/script.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createErrorField: () => (/* binding */ createErrorField)\n/* harmony export */ });\nconst button = document.body.querySelector(\"button\");\nconst createUserTable = function (user) {\n    clearPreviousData();\n    const table = document.createElement(\"table\");\n    const tableHead = [\n        \"photo\",\n        \"name\",\n        \"gender\",\n        \"age\",\n        \"phone\",\n        \"address\",\n        \"email\",\n    ];\n    table.id = \"user\";\n    const trHead = document.createElement(\"tr\");\n    tableHead.forEach(function (name) {\n        const th = document.createElement(\"th\");\n        th.innerText = String(name[0].toUpperCase() + name.slice(1));\n        trHead.appendChild(th);\n    });\n    table.appendChild(trHead);\n    const trRow = document.createElement(\"tr\");\n    tableHead.forEach((name) => {\n        if (name === \"username\" || name === \"title\") {\n            return;\n        }\n        const td = document.createElement(\"td\");\n        if (name === \"photo\") {\n            const img = document.createElement(\"img\");\n            img.src = user[name];\n            img.alt = String(user.username);\n            img.title = user.title;\n            td.appendChild(img);\n            trRow.appendChild(td);\n            return;\n        }\n        td.innerText = String(user[name]);\n        trRow.appendChild(td);\n    });\n    table.appendChild(trRow);\n    document.body.appendChild(table);\n    button.disabled = false;\n    document.body.appendChild(table);\n};\nconst createErrorField = (obj) => {\n    clearPreviousData();\n    const error = document.createElement(\"div\");\n    error.id = \"error\";\n    const preElement = document.createElement(\"pre\");\n    preElement.textContent = Object.keys(obj)\n        .map((key) => {\n        let value = String(obj[key]);\n        if (key === \"stack\") {\n            value = value.replace(/\\n/g, \"\\n\\t\");\n        }\n        return `${key}: ${value}`;\n    })\n        .join(\"\\n\");\n    error.appendChild(preElement);\n    document.body.appendChild(error);\n};\nconst normalizeData = function (str) {\n    return [str].flat(2).join(\" \").replace(/ +/, \" \").trim();\n};\nconst removeUserTable = () => {\n    const userTable = document.getElementById(\"user\");\n    if (userTable) {\n        document.body.removeChild(userTable);\n    }\n};\nconst removeErrorField = () => {\n    const errorField = document.getElementById(\"error\");\n    if (errorField) {\n        document.body.removeChild(errorField);\n    }\n};\nconst clearPreviousData = () => {\n    removeUserTable();\n    removeErrorField();\n};\nconst parseUserData = (data) => {\n    const user = data;\n    createUserTable({\n        photo: user.picture.medium,\n        name: normalizeData([user.name.first, user.name.last]),\n        gender: user.gender,\n        age: user.dob.age,\n        phone: user.cell,\n        address: normalizeData([\n            `${String(user.location.street.number).trim()},`,\n            user.location.street.name,\n            user.location.country,\n            `${String(user.location.state).trim()},`,\n            user.location.postcode,\n        ]),\n        email: user.email,\n        username: user.login.username,\n        title: normalizeData([\n            user.name.title,\n            user.name.first,\n            user.name.last,\n            `[${user.nat}]`,\n        ]),\n    });\n};\nbutton.onclick = async () => {\n    button.disabled = true;\n    const error = {\n        status: 0,\n    };\n    try {\n        const response = await fetch(\"https://randomuser.me/api/\");\n        if (!response.ok) {\n            error.status = response.status;\n            throw Error(response.statusText);\n        }\n        const data = await response.json();\n        const user = data.results[0];\n        parseUserData(user);\n    }\n    catch (e) {\n        error.message = e.message;\n        error.stack = e.stack;\n        button.disabled = false;\n        createErrorField(error);\n        return;\n    }\n};\n\n\n//# sourceURL=webpack://step-2/../step-1/ts/script.ts?");

/***/ }),

/***/ "./step2.ts":
/*!******************!*\
  !*** ./step2.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step_1_ts_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../step-1/ts/script */ \"../step-1/ts/script.ts\");\n\n(0,_step_1_ts_script__WEBPACK_IMPORTED_MODULE_0__.createTableHead)();\n\n\n//# sourceURL=webpack://step-2/./step2.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./step2.ts");
/******/ 	
/******/ })()
;