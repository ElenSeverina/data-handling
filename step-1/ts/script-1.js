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
var _this = this;
var button = document.body.querySelector('button');
var tableColumnNames = [
    'photo',
    'name',
    'gender',
    'age',
    'phone',
    'address',
    'email',
];
var createUserTable = function () {
    var userTable = document.createElement('table');
    userTable.id = 'user';
    return userTable;
};
var createUserTableHeader = function (tableHeaderData) {
    var headerRow = document.createElement('tr');
    tableHeaderData.forEach(function (columnName) {
        var columnHeader = document.createElement('th');
        columnHeader.innerText = String(columnName[0].toUpperCase() + columnName.slice(1));
        headerRow.appendChild(columnHeader);
    });
    return headerRow;
};
var createUserTableRow = function (user, columnNames) {
    var userTableRow = document.createElement('tr');
    columnNames.forEach(function (columnName) {
        if (columnName === 'username' || columnName === 'title') {
            return;
        }
        var userTableCell = document.createElement('td');
        if (columnName === 'photo') {
            userTableCell.innerHTML = user[columnName];
        }
        else {
            userTableCell.innerText = String(user[columnName]);
        }
        userTableRow.appendChild(userTableCell);
    });
    return userTableRow;
};
var createErrorField = function (errorData) {
    var errorContainer = document.createElement('div');
    errorContainer.id = 'error';
    var errorTextElement = document.createElement('pre');
    errorTextElement.textContent = Object.keys(errorData)
        .map(function (key) {
        var value = String(errorData[key]);
        if (key === 'stack') {
            value = value.replace(/\n/g, '\n\t');
        }
        return "".concat(key, ": ").concat(value);
    })
        .join('\n');
    errorContainer.appendChild(errorTextElement);
    return errorContainer;
};
var normalizeUserData = function (userDataArray) { return [userDataArray]
    .flat(2)
    .join(' ')
    .replace(/ +/, ' ')
    .trim(); };
var getUserData = function (userData) { return ({
    photo: "<img src=\"".concat(userData.picture.medium, "\" \n  alt=\"").concat(userData.login.username, "\" \n  title=\"").concat(normalizeUserData([
        userData.name.title, userData.name.first, userData.name.last,
        "[".concat(userData.nat, "]"),
    ]), "\" />"),
    name: normalizeUserData([userData.name.first, userData.name.last]),
    gender: userData.gender,
    age: userData.dob.age,
    phone: userData.cell,
    address: normalizeUserData([
        "".concat(String(userData.location.street.number).trim(), ","),
        userData.location.street.name,
        userData.location.country,
        "".concat(String(userData.location.state).trim(), ","),
        userData.location.postcode,
    ]),
    email: userData.email,
    username: userData.login.username,
    title: normalizeUserData([
        userData.name.title, userData.name.first, userData.name.last,
        "[".concat(userData.nat, "\n  ]")
    ]),
}); };
var removeUserTable = function () {
    var userTable = document.getElementById('user');
    if (userTable) {
        userTable.remove();
    }
};
var removeErrorField = function () {
    var errorField = document.getElementById('error');
    if (errorField) {
        errorField.remove();
    }
};
var removeErrorAndTableData = function () {
    removeUserTable();
    removeErrorField();
};
button.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
    var userDataResponse, errorData, response, e_1, userDataResults, user, userTable;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                button.disabled = true;
                userDataResponse = {};
                errorData = {
                    status: 0,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch('https://randomuser.me/api/')];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                userDataResponse = _a.sent();
                if (!response.ok) {
                    errorData.status = response.status;
                    throw Error(response.statusText);
                }
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                if (e_1 instanceof Error) {
                    errorData.message = e_1.message;
                    errorData.stack = e_1.stack || '';
                }
                else if (typeof e_1 === 'string') {
                    errorData.message = e_1;
                }
                else {
                    errorData.message = 'An unknown error occurred.';
                }
                button.disabled = false;
                removeErrorAndTableData();
                document.body.appendChild(createErrorField(errorData));
                return [2 /*return*/];
            case 5:
                userDataResults = userDataResponse;
                user = userDataResults.results[0];
                removeErrorAndTableData();
                userTable = createUserTable();
                userTable.appendChild(createUserTableHeader(tableColumnNames));
                userTable.appendChild(createUserTableRow(getUserData(user), tableColumnNames));
                document.body.appendChild(userTable);
                button.disabled = false;
                return [2 /*return*/];
        }
    });
}); };
