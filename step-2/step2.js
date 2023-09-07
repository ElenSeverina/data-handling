"use strict";
// import { 
//   createUserTable,
//   createUserTableHeader, 
//   createUserTableRow as createUserTableRowOne,
//   createErrorField,
//   normalizeData,
//   removeUserTable,
//   removeErrorField,
// } from '../step-1/ts/script-1';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// function createUserTableRow() {
//   try {
//     for (let i = 0; i < 5; i++) {
//       return createUserTableRowOne();
//     }
//     setTimeout(async () => {
//       for (let i = 0; i < 5; i++) {
//         return createUserTableRowOne();
//       }
//     }, 2000);
//   } catch (error) {
//     createErrorField(error);
//     return;
//   }
// }
// const button: HTMLElement = document.querySelector('.btn');
// button.onclick = async () => {
//   try {
//     const results = await Promise.all([
//       createUserTable(), 
//       createUserTableHeader(), 
//       createUserTableRow(), 
//       normalizeData(),
//       removeUserTable(),
//       removeErrorField(),
//     ]);
//     console.log(results);
//   } catch (error) {
//     createErrorField(error);
//   }
// };
// button.onclick = () => {
//   const loader: HTMLElement = document.querySelector('.loader');
//   button.style.color = 'transparent';
//   loader.style.display = 'block';
//   setTimeout(() => {
//     loader.style.display = 'none';
//     button.style.color = 'black';
//   }, 3000);
// }
var CreateUserInterface = require("../step-1/ts/script-1");
var button = document.body.querySelector("button");
button.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error, response, data, user, userData_1, table, trRow_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                CreateUserInterface.removeUserTable();
                CreateUserInterface.removeErrorField();
                button.disabled = true;
                error = {
                    status: 0,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://randomuser.me/api/")];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    error.status = response.status;
                    throw Error(response.statusText);
                }
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                user = data.results[0];
                CreateUserInterface.createUserTable();
                CreateUserInterface.createUserTableHeader();
                userData_1 = CreateUserInterface.createUserTableRow(user);
                table = document.getElementById("user");
                trRow_1 = document.createElement("tr");
                CreateUserInterface.tableHead.forEach(function (name) {
                    if (name === "username" || name === "title") {
                        return;
                    }
                    var td = document.createElement("td");
                    if (name === "photo") {
                        td.innerHTML = userData_1[name];
                    }
                    else {
                        td.innerText = String(userData_1[name]);
                    }
                    trRow_1.appendChild(td);
                });
                table.appendChild(trRow_1);
                document.body.appendChild(table);
                button.disabled = false;
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                error.message = e_1.message;
                error.stack = e_1.stack;
                button.disabled = false;
                CreateUserInterface.createErrorField(error);
                return [2 /*return*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
