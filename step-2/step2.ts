// import { 
//   createUserTable,
//   createUserTableHeader, 
//   createUserTableRow as createUserTableRowOne,
//   createErrorField,
//   normalizeData,
//   removeUserTable,
//   removeErrorField,
// } from '../step-1/ts/script-1';


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


import * as CreateUserInterface from '../step-1/ts/script-1';

const button = document.body.querySelector("button") as HTMLButtonElement;

button.onclick = async (): Promise<void> => {
  CreateUserInterface.removeUserTable();
  CreateUserInterface.removeErrorField();

  button.disabled = true;
  const error: { status: number; message?: string; stack?: string } = {
    status: 0,
  };
  try {
    const response: Response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      error.status = response.status;
      throw Error(response.statusText);
    }
    const data: CreateUserInterface.RandomUserData = await response.json();
    const user: CreateUserInterface.UserData = data.results[0];
    
    CreateUserInterface.createUserTable();
    CreateUserInterface.createUserTableHeader();

    const userData: CreateUserInterface.User = CreateUserInterface.createUserTableRow(user);

    const table: HTMLElement = document.getElementById("user");
    const trRow: HTMLTableRowElement = document.createElement("tr");
    CreateUserInterface.tableHead.forEach((name) => {
      if (name === "username" || name === "title") {
        return;
      }
      const td: HTMLTableCellElement = document.createElement("td");
      if (name === "photo") {
        td.innerHTML = userData[name];
      } else {
        td.innerText = String(userData[name]);
      }
      trRow.appendChild(td);
    });
    table.appendChild(trRow);
    document.body.appendChild(table);
    button.disabled = false;
  } catch (e: any) {
    error.message = e.message;
    error.stack = e.stack;
    button.disabled = false;
    CreateUserInterface.createErrorField(error);
    return;
  }
};
