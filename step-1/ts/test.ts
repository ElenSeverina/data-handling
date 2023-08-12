// // const button: HTMLButtonElement | null = document.body.querySelector('button');
// // const removeUserTable = (): void => {
// //     const userTable: HTMLElement | null = document.getElementById('user');
// //     if (userTable) {
// //         document.body.removeChild(userTable);
// //     }
// // };

// // const removeErrorField = (): void => {
// //     const errorField: HTMLElement | null = document.getElementById('error');
// //     if (errorField) {
// //         document.body.removeChild(errorField);
// //     }
// // };

// // const clearPreviousData = (): void => {
// //     removeUserTable();
// //     removeErrorField();
// // };

// // const createErrorField = (obj: { [key: string]: any }): void => {
// //     clearPreviousData();
// //     const error: HTMLDivElement = document.createElement('div');
// //     error.id = 'error';
// //     Object.keys(obj).forEach((key, index) => {
// //         const value = obj[key];
// //         const newLine = `${index === 0 ? '' : '\n'}${String(key)}: ${String(value)}`;
// //         error.innerHTML += newLine;
// //     });
// //     document.body.appendChild(error);
// // };

// // interface User {
// //     name: string;
// //     gender: string;
// //     email: string;
// //     phone: string;
// //     age: number;
// //     username: string;
// //     photo: string;
// //     title: string;
// //     address: string;
// // }

// // const createUserTable = (user: User): void => {
// //     clearPreviousData();
// //     const tableHead: string[] = ['photo', 'name', 'gender', 'age', 'phone', 'address', 'email'];
// //     const table: HTMLTableElement = document.createElement('table');
// //     table.id = 'user';
// //     const trHead: HTMLTableRowElement = document.createElement('tr');
// //     tableHead.forEach((name) => {
// //         const th: HTMLTableHeaderCellElement = document.createElement('th');
// //         th.innerText = String(name[0].toUpperCase() + name.slice(1));
// //         trHead.appendChild(th);
// //     });
// //     table.appendChild(trHead);
// //     const trRow: HTMLTableRowElement = document.createElement('tr');
// //     tableHead.forEach((name) => {
// //         if (name === 'username' || name === 'title') {
// //             return;
// //         }
// //         const td: HTMLTableDataCellElement = document.createElement('td');
// //         if (name === 'photo') {
// //             const img: HTMLImageElement = document.createElement('img');
// //             img.src = user[name];
// //             img.alt = String(user.username);
// //             img.title = user.title;
// //             td.appendChild(img);
// //             trRow.appendChild(td);
// //             return;
// //         }
// //         td.innerText = String(user[name]);
// //         trRow.appendChild(td);
// //     });
// //     table.appendChild(trRow);
// //     document.body.appendChild(table);
// //     if (button) {
// //         button.disabled = false;
// //     }
// // };

// // const normalizeStringData = (str: string | string[]): string => {
// //     return Array.isArray(str) ? str.flat(2).join(' ').replace(/ +/, ' ').trim() : str;
// // };

// // if (button) {
// //     button.onclick = async (): Promise<void> => {
// //         if (button) {
// //             button.disabled = true;
// //         }
// //         let data: any = {};
// //         const error: { status: number; message?: string; stack?: string } = { status: 0 };
// //         try {
// //             const response: Response = await fetch('https://randomuser.me/api/');
// //             if (!response.ok) {
// //                 error.status = response.status;
// //                 throw Error(response.statusText);
// //             }
// //             data = await response.json();
// //         } catch (e) {
// //             error.message = e.message;
// //             error.stack = e.stack;
// //             if (button) {
// //                 button.disabled = false;
// //             }
// //             createErrorField(error);
// //             return;
// //         }
// //         const { results }: { results: any[] } = data;
// //         const [user]: any[] = results;
// //         createUserTable({
// //             name: normalizeStringData([user.name.first, user.name.last]),
// //             gender: user.gender,
// //             email: user.email,
// //             phone: user.cell,
// //             age: user.dob.age,
// //             username: user.login.username,
// //             photo: user.picture.medium,
// //             title: normalizeStringData([user.name.title, user.name.first, user.name.last, `[${user.nat}]`]),
// //             address: normalizeStringData([
// //                 `${String(user.location.street.number).trim()},`,
// //                 user.location.street.name,
// //                 user.location.country,
// //                 `${String(user.location.state).trim()},`,
// //                 user.location.postcode,
// //             ]),
// //         } as User);
// //     };
// // }


// const button: HTMLButtonElement = document.body.querySelector('button') as HTMLButtonElement;

// interface User {
//     photo: string;
//     name: string;
//     gender: string;
//     age: number;
//     phone: string;
//     address: string;
//     email: string;
//     username: string; 
//     title: string;
// }

// const removeUserTable = (): void => {
//     const userTable: HTMLElement | null = document.getElementById('user');
//     if (userTable) {
//         document.body.removeChild(userTable);
//     }
// };

// const removeErrorField = (): void => {
//     const errorField: HTMLElement | null = document.getElementById('error');
//     if (errorField) {
//         document.body.removeChild(errorField);
//     }
// };

// const clearPreviousData = (): void => {
//     removeUserTable();
//     removeErrorField();
// };

// const createErrorField = (obj: { [key: string]: any }): void => {
//     clearPreviousData();
//     const error: HTMLElement = document.createElement('error');
//     error.id = 'error';
//     Object.keys(obj).forEach((key, index) => {
//         const value = obj[key];
//         const newLine = `${index === 0 ? '' : '\n'}${String(key)}: ${String(value)}`;
//         error.innerHTML += newLine;
//     });
//     document.body.appendChild(error);
// };

// const createUserTable = (user: User): void => {
//     clearPreviousData();
//     const table: HTMLTableElement = document.createElement('table');
//     const tableHead: string[] = ['photo', 'name', 'gender', 'age', 'phone', 'address', 'email'];
//     table.id = 'user';

//     const trHead: HTMLTableRowElement = document.createElement('tr');
//     tableHead.forEach((name: string) => {
//         const th: HTMLTableHeaderCellElement = document.createElement('th');
//         th.innerText = String(name[0].toUpperCase() + name.slice(1));
//         trHead.appendChild(th);
//     });
//     table.appendChild(trHead);

//     const trRow: HTMLTableRowElement = document.createElement('tr');
//     tableHead.forEach((name) => {
//         if (name === 'username' || name === 'title') {
//             return;
//         }
//         const td: HTMLTableDataCellElement = document.createElement('td');
//         if (name === 'photo') {
//             const img: HTMLImageElement = document.createElement('img');
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

// const normalizeStringData = (str: string[]): string => {
//     return str.flat(2).join(' ').replace(/ +/, ' ').trim();
// };

// interface UserData {
//   picture: {
//       medium: string;
//   };
//   name: {
//       first: string;
//       last: string;
//       title: string;
//   };
//   gender: string;
//   dob: {
//       age: number;
//   };
//   cell: string;
//   location: {
//       street: {
//           number: number;
//           name: string;
//       };
//       country: string;
//       state: string;
//       postcode: string;
//   };
//   email: string;
//   login: {
//       username: string;
//   };
//   nat: string;
// }

// const parseUserData = (data: UserData): void => {
//   const user: UserData = data;
//   createUserTable({
//       photo: user.picture.medium,
//       name: normalizeStringData([
//           user.name.first,
//           user.name.last,
//       ]),
//       gender: user.gender,
//       age: user.dob.age,
//       phone: user.cell,
//       address: normalizeStringData([
//           `${String(user.location.street.number).trim()},`,
//           user.location.street.name,
//           user.location.country,
//           `${String(user.location.state).trim()},`,
//           user.location.postcode,
//       ]),
//       email: user.email,
//       username: user.login.username,
//       title: normalizeStringData([
//           user.name.title,
//           user.name.first,
//           user.name.last,
//           `[${user.nat}]`,
//       ]),
//   });
// };

// interface RandomUserData {
//   results: UserData[];
// }

// button.onclick = async (): Promise<void> => {
//     button.disabled = true;
//     const error: { status: number; message?: string; stack?: string } = { status: 0 };
//     try {
//         const response: Response = await fetch('https://randomuser.me/api/');
//         if (!response.ok) {
//             error.status = response.status;
//             throw Error(response.statusText);
//         }
//         const data: RandomUserData = await response.json();
//         const user: UserData = data.results[0];
//         parseUserData(user);
//     } catch (e: any) {
//         error.message = e.message;
//         error.stack = e.stack;
//         button.disabled = false;
//         createErrorField(error);
//         return;
//     }

// };

