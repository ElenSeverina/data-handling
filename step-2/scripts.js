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

/***/ "../step-1/ts/script-1.ts":
/*!********************************!*\
  !*** ../step-1/ts/script-1.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createUserTableRow = exports.removeErrorField = exports.removeUserTable = exports.normalizeData = exports.createErrorField = exports.createUserTableHeader = exports.createUserTable = exports.tableHead = void 0;\nconst button = document.body.querySelector(\"button\");\nexports.tableHead = [\n    \"photo\",\n    \"name\",\n    \"gender\",\n    \"age\",\n    \"phone\",\n    \"address\",\n    \"email\",\n];\nconst createUserTable = function () {\n    const table = document.createElement(\"table\");\n    table.id = \"user\";\n    document.body.appendChild(table);\n    button.disabled = false;\n};\nexports.createUserTable = createUserTable;\nconst createUserTableHeader = function () {\n    const trHead = document.createElement(\"tr\");\n    const table = document.getElementById(\"user\");\n    exports.tableHead.forEach(function (name) {\n        const thHead = document.createElement(\"th\");\n        thHead.innerText = String(name[0].toUpperCase() + name.slice(1));\n        trHead.appendChild(thHead);\n    });\n    table.appendChild(trHead);\n};\nexports.createUserTableHeader = createUserTableHeader;\nconst createErrorField = (obj) => {\n    const error = document.createElement(\"div\");\n    error.id = \"error\";\n    const preElement = document.createElement(\"pre\");\n    preElement.textContent = Object.keys(obj)\n        .map((key) => {\n        let value = String(obj[key]);\n        if (key === \"stack\") {\n            value = value.replace(/\\n/g, \"\\n\\t\");\n        }\n        return `${key}: ${value}`;\n    })\n        .join(\"\\n\");\n    error.appendChild(preElement);\n    document.body.appendChild(error);\n};\nexports.createErrorField = createErrorField;\nconst normalizeData = function (str) {\n    return [str].flat(2).join(\" \").replace(/ +/, \" \").trim();\n};\nexports.normalizeData = normalizeData;\nconst removeUserTable = () => {\n    const table = document.getElementById(\"user\");\n    if (table) {\n        table.remove();\n    }\n};\nexports.removeUserTable = removeUserTable;\nconst removeErrorField = () => {\n    const errorField = document.getElementById(\"error\");\n    if (errorField) {\n        errorField.remove();\n    }\n};\nexports.removeErrorField = removeErrorField;\nconst createUserTableRow = function (user) {\n    return {\n        photo: `<img src=\"${user.picture.medium}\" alt=\"${user.login.username}\" title=\"${(0, exports.normalizeData)([user.name.title, user.name.first, user.name.last, `[${user.nat}]`])}\" />`,\n        name: (0, exports.normalizeData)([user.name.first, user.name.last]),\n        gender: user.gender,\n        age: user.dob.age,\n        phone: user.cell,\n        address: (0, exports.normalizeData)([\n            `${String(user.location.street.number).trim()},`,\n            user.location.street.name,\n            user.location.country,\n            `${String(user.location.state).trim()},`,\n            user.location.postcode,\n        ]),\n        email: user.email,\n        username: user.login.username,\n        title: (0, exports.normalizeData)([user.name.title, user.name.first, user.name.last, `[${user.nat}]`]),\n    };\n};\nexports.createUserTableRow = createUserTableRow;\nbutton.onclick = () => __awaiter(void 0, void 0, void 0, function* () {\n    (0, exports.removeUserTable)();\n    (0, exports.removeErrorField)();\n    button.disabled = true;\n    const error = {\n        status: 0,\n    };\n    try {\n        const response = yield fetch(\"https://randomuser.me/api/\");\n        if (!response.ok) {\n            error.status = response.status;\n            throw Error(response.statusText);\n        }\n        const data = yield response.json();\n        const user = data.results[0];\n        (0, exports.createUserTable)();\n        (0, exports.createUserTableHeader)();\n        const userData = (0, exports.createUserTableRow)(user);\n        const table = document.getElementById(\"user\");\n        const trRow = document.createElement(\"tr\");\n        exports.tableHead.forEach((name) => {\n            if (name === \"username\" || name === \"title\") {\n                return;\n            }\n            const td = document.createElement(\"td\");\n            if (name === \"photo\") {\n                td.innerHTML = userData[name];\n            }\n            else {\n                td.innerText = String(userData[name]);\n            }\n            trRow.appendChild(td);\n        });\n        table.appendChild(trRow);\n        document.body.appendChild(table);\n        button.disabled = false;\n    }\n    catch (e) {\n        error.message = e.message;\n        error.stack = e.stack;\n        button.disabled = false;\n        (0, exports.createErrorField)(error);\n        return;\n    }\n});\n\n\n//# sourceURL=webpack://step-2/../step-1/ts/script-1.ts?");

/***/ }),

/***/ "./step2.ts":
/*!******************!*\
  !*** ./step2.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n// import { \n//   createUserTable,\n//   createUserTableHeader, \n//   createUserTableRow as createUserTableRowOne,\n//   createErrorField,\n//   normalizeData,\n//   removeUserTable,\n//   removeErrorField,\n// } from '../step-1/ts/script-1';\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// function createUserTableRow() {\n//   try {\n//     for (let i = 0; i < 5; i++) {\n//       return createUserTableRowOne();\n//     }\n//     setTimeout(async () => {\n//       for (let i = 0; i < 5; i++) {\n//         return createUserTableRowOne();\n//       }\n//     }, 2000);\n//   } catch (error) {\n//     createErrorField(error);\n//     return;\n//   }\n// }\n// const button: HTMLElement = document.querySelector('.btn');\n// button.onclick = async () => {\n//   try {\n//     const results = await Promise.all([\n//       createUserTable(), \n//       createUserTableHeader(), \n//       createUserTableRow(), \n//       normalizeData(),\n//       removeUserTable(),\n//       removeErrorField(),\n//     ]);\n//     console.log(results);\n//   } catch (error) {\n//     createErrorField(error);\n//   }\n// };\n// button.onclick = () => {\n//   const loader: HTMLElement = document.querySelector('.loader');\n//   button.style.color = 'transparent';\n//   loader.style.display = 'block';\n//   setTimeout(() => {\n//     loader.style.display = 'none';\n//     button.style.color = 'black';\n//   }, 3000);\n// }\nconst CreateUserInterface = __importStar(__webpack_require__(/*! ../step-1/ts/script-1 */ \"../step-1/ts/script-1.ts\"));\nconst button = document.body.querySelector(\"button\");\nbutton.onclick = () => __awaiter(void 0, void 0, void 0, function* () {\n    CreateUserInterface.removeUserTable();\n    CreateUserInterface.removeErrorField();\n    button.disabled = true;\n    const error = {\n        status: 0,\n    };\n    try {\n        const response = yield fetch(\"https://randomuser.me/api/\");\n        if (!response.ok) {\n            error.status = response.status;\n            throw Error(response.statusText);\n        }\n        const data = yield response.json();\n        const user = data.results[0];\n        CreateUserInterface.createUserTable();\n        CreateUserInterface.createUserTableHeader();\n        const userData = CreateUserInterface.createUserTableRow(user);\n        const table = document.getElementById(\"user\");\n        const trRow = document.createElement(\"tr\");\n        CreateUserInterface.tableHead.forEach((name) => {\n            if (name === \"username\" || name === \"title\") {\n                return;\n            }\n            const td = document.createElement(\"td\");\n            if (name === \"photo\") {\n                td.innerHTML = userData[name];\n            }\n            else {\n                td.innerText = String(userData[name]);\n            }\n            trRow.appendChild(td);\n        });\n        table.appendChild(trRow);\n        document.body.appendChild(table);\n        button.disabled = false;\n    }\n    catch (e) {\n        error.message = e.message;\n        error.stack = e.stack;\n        button.disabled = false;\n        CreateUserInterface.createErrorField(error);\n        return;\n    }\n});\n\n\n//# sourceURL=webpack://step-2/./step2.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./step2.ts");
/******/ 	
/******/ })()
;