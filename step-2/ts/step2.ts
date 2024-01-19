// import {
//   createUserTable,
//   createUserTableHeader,
//   createUserTableRow,
//   createErrorField,
//   normalizeData,
//   с
// } from '../step-1/ts/script-1';

// function createUserTableRow() {
//   try {
//     for (let i = 0; i < 5; i++) {
//       return createUserTableRow();
//     }

//     setTimeout(async () => {
//       for (let i = 0; i < 5; i++) {
//         return createUserTableRow();
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
//       clearPreviousData()
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

// import * as CreateUserInterface from '../step-1/ts/script-1';

// const button = document.body.querySelector('button') as HTMLButtonElement;

// button.onclick = async (): Promise<void> => {
//   button.disabled = true;
//   const error: { status: number; message?: string; stack?: string } = {
//     status: 0,
//   };

//    const response: Response = await fetch('https://randomuser.me/api/');
//    const data: CreateUserInterface.RandomUserData = await response.json();
//    const user: CreateUserInterface.UserData = data.results[0];

//   try {
//     if (!response.ok) {
//       error.status = response.status;
//       throw Error(response.statusText);
//     }
//   } catch (e: any) {
//     error.message = e.message;
//     error.stack = e.stack;
//     button.disabled = false;
//     CreateUserInterface.createErrorField(error);
//   }

//     CreateUserInterface.clearPreviousData();

//     const table: HTMLElement = CreateUserInterface.createUserTable();
//     table.appendChild(createUserTableHeader(tableHead));
//     table.appendChild(createUserTableRow(getUserData(user), tableHead));
//     document.body.appendChild(table);

//     button.disabled = false;
// };
