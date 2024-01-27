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
var tableHead = [
    'photo',
    'name',
    'gender',
    'age',
    'phone',
    'address',
    'email',
];
var createUserTable = function () {
    var table = document.createElement('table');
    table.id = 'user';
    return table;
};
var createUserTableHeader = function (data) {
    var trHead = document.createElement('tr');
    data.forEach(function (name) {
        var th = document.createElement('th');
        th.innerText = String(name[0].toUpperCase() + name.slice(1));
        trHead.appendChild(th);
    });
    return trHead;
};
var createUserTableRow = function (user, data) {
    var trRow = document.createElement('tr');
    data.forEach(function (name) {
        if (name === 'username' || name === 'title') {
            return;
        }
        var td = document.createElement('td');
        if (name === 'photo') {
            td.innerHTML = user[name];
        }
        else {
            td.innerText = String(user[name]);
        }
        trRow.appendChild(td);
    });
    return trRow;
};
var createErrorField = function (obj) {
    var error = document.createElement('div');
    error.id = 'error';
    var preElement = document.createElement('pre');
    preElement.textContent = Object.keys(obj)
        .map(function (key) {
        var value = String(obj[key]);
        if (key === 'stack') {
            value = value.replace(/\n/g, '\n\t');
        }
        return "".concat(key, ": ").concat(value);
    })
        .join('\n');
    error.appendChild(preElement);
    return error;
};
var normalizeData = function (str) { return [str]
    .flat(2)
    .join(' ')
    .replace(/ +/, ' ')
    .trim(); };
var getUserData = function (user) { return ({
    photo: "<img src=\"".concat(user.picture.medium, "\" alt=\"").concat(user.login.username, "\" title=\"").concat(normalizeData([user.name.title, user.name.first, user.name.last, "[".concat(user.nat, "]")]), "\" />"),
    name: normalizeData([user.name.first, user.name.last]),
    gender: user.gender,
    age: user.dob.age,
    phone: user.cell,
    address: normalizeData([
        "".concat(String(user.location.street.number).trim(), ","),
        user.location.street.name,
        user.location.country,
        "".concat(String(user.location.state).trim(), ","),
        user.location.postcode,
    ]),
    email: user.email,
    username: user.login.username,
    title: normalizeData([user.name.title, user.name.first, user.name.last, "[".concat(user.nat, "]")]),
}); };
var removeUserTable = function () {
    var table = document.getElementById('user');
    if (table) {
        table.remove();
    }
};
var removeErrorField = function () {
    var errorField = document.getElementById('error');
    if (errorField) {
        errorField.remove();
    }
};
var clearPreviousData = function () {
    removeUserTable();
    removeErrorField();
};
button.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
    var data, error, response, e_1, results, user, table;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                button.disabled = true;
                data = {};
                error = {
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
                data = _a.sent();
                if (!response.ok) {
                    error.status = response.status;
                    throw Error(response.statusText);
                }
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                error.message = e_1.message;
                error.stack = e_1.stack;
                button.disabled = false;
                clearPreviousData();
                document.body.appendChild(createErrorField(error));
                return [2 /*return*/];
            case 5:
                results = data;
                user = results.results[0];
                clearPreviousData();
                table = createUserTable();
                table.appendChild(createUserTableHeader(tableHead));
                table.appendChild(createUserTableRow(getUserData(user), tableHead));
                document.body.appendChild(table);
                button.disabled = false;
                return [2 /*return*/];
        }
    });
}); };
