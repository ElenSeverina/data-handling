// const button = document.body.querySelector('button');
// const removeUserTable = () => {
//     const userTable = document.getElementById('user');
//     if (userTable) {
//         document.body.removeChild(userTable);
//     }
// };
// const removeErrorField = () => {
//     const errorField = document.getElementById('error');
//     if (errorField) {
//         document.body.removeChild(errorField);
//     }
// };
// const clearPreviousData = () => {
//     removeUserTable();
//     removeErrorField();
// };

// const createErrorField = (obj) => {
//     clearPreviousData();
//     const error = document.createElement('error');
//     error.id = 'error';
//     Object.keys(obj).forEach((key, index) => {
//         const value = obj[key];
//         const newLine = `${index === 0 ? '' : '\n'}${String(key)}: ${String(value)}`;
//         pre.innerHTML += newLine;
//     });
//     document.body.appendChild(error);
// };

// const createUserTable = (user) => {
//     clearPreviousData();
//     const tableHead = ['photo', 'name', 'gender', 'age', 'phone', 'address', 'email'];
//     const table = document.createElement('table');
//     table.id = 'user';
//     const trHead = document.createElement('tr');
//     tableHead.forEach((name) => {
//         const th = document.createElement('th');
//         th.innerText = String(name[0].toUpperCase() + name.slice(1));
//         trHead.appendChild(th);
//     });
//     table.appendChild(trHead);
//     const trRow = document.createElement('tr');
//     tableHead.forEach((name) => {
//         if (name === 'username' || name === 'title') {
//             return;
//         }
//         const td = document.createElement('td');
//         if (name === 'photo') {
//             const img = document.createElement('img');
//             img.src = user[name];
//             img.alt = String(user.username);
//             img.title = user.title;
//             td.appendChild(img);
//             trRow.appendChild(td);
//             return;
//         }
//         td.innerText = String(user[name]);
//         trRow.appendChild(td);
//     });
//     table.appendChild(trRow);
//     document.body.appendChild(table);
//     button.disabled = false;
// };
// const normalizeStringData = (str) => {
//     return [str].flat(2).join(' ').replace(/ +/, ' ').trim();
// };
// button.onclick = async () => {
//     button.disabled = true;
//     let data = {};
//     const error = { status: 0 };
//     try {
//         const response = await fetch('https://randomuser.me/api/');
//         if (!response.ok) {
//             error.status = response.status;
//             throw Error(response.statusText);
//         }
//         data = await response.json();
//     }
//     catch (e) {
//         error.message = e.message;
//         error.stack = e.stack;
//         button.disabled = false;
//         createErrorField(error);
//         return;
//     }
//     const { results } = data;
//     const [user] = results;
//     createUserTable({
//         name: normalizeStringData([
//             user.name.first,
//             user.name.last,
//         ]),
//         gender: user.gender,
//         email: user.email,
//         phone: user.cell,
//         age: user.dob.age,
//         username: user.login.username,
//         photo: user.picture.medium,
//         title: normalizeStringData([
//             user.name.title,
//             user.name.first,
//             user.name.last,
//             `[${user.nat}]`,
//         ]),
//         address: normalizeStringData([
//             `${String(user.location.street.number).trim()},`,
//             user.location.street.name,
//             user.location.country,
//             `${String(user.location.state).trim()},`,
//             user.location.postcode,
//         ]),
//     });
// };