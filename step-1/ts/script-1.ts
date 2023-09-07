const button = document.body.querySelector("button") as HTMLButtonElement;
export const tableHead: string[] = [
  "photo",
  "name",
  "gender",
  "age",
  "phone",
  "address",
  "email",
];

export interface User {
  photo: string;
  name: string;
  gender: string;
  age: number;
  phone: string;
  address: string;
  email: string;
  username: string;
  title: string;
}

export interface UserData {
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  gender: string;
  dob: {
    age: number;
  };
  cell: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    country: string;
    state: string;
    postcode: string;
  };
  email: string;
  login: {
    username: string;
  };
  nat: string;
}

export interface RandomUserData {
  results: UserData[];
}

export const createUserTable = function (): void {
  const table: HTMLTableElement = document.createElement("table");
  table.id = "user";
  document.body.appendChild(table);
  button.disabled = false;
};

export const createUserTableHeader = function (): void {
  const trHead: HTMLTableRowElement = document.createElement("tr");
  const table: HTMLElement = document.getElementById("user");

  tableHead.forEach(function (name: string) {
    const thHead: HTMLTableCellElement = document.createElement("th");
    thHead.innerText = String(name[0].toUpperCase() + name.slice(1));
    trHead.appendChild(thHead);
  });
  table.appendChild(trHead);
}

export const createErrorField = (obj: { [key: string]: any }): void => {
  const error: HTMLElement = document.createElement("div");
  error.id = "error";
  const preElement: HTMLElement = document.createElement("pre");
  preElement.textContent = Object.keys(obj)
    .map((key: string) => {
      let value: string = String(obj[key]);

      if (key === "stack") {
        value = value.replace(/\n/g, "\n\t");
      }
      return `${key}: ${value}`;
    })
    .join("\n");

  error.appendChild(preElement);
  document.body.appendChild(error);
};

export const normalizeData = function (str: string[]): string {
  return [str].flat(2).join(" ").replace(/ +/, " ").trim();
};

export const removeUserTable = (): void => {
  const table: HTMLElement = document.getElementById("user");
  if (table) {
    table.remove();
  }
};

export const removeErrorField = (): void => {
  const errorField: HTMLElement = document.getElementById("error");
  if (errorField) {
    errorField.remove();
  }
};

export const createUserTableRow = function (user: UserData): User {
  return {
    photo: `<img src="${user.picture.medium}" alt="${user.login.username}" title="${normalizeData([user.name.title, user.name.first, user.name.last, `[${user.nat}]`])}" />`,
    name: normalizeData([user.name.first, user.name.last]),
    gender: user.gender,
    age: user.dob.age,
    phone: user.cell,
    address: normalizeData([
      `${String(user.location.street.number).trim()},`,
      user.location.street.name,
      user.location.country,
      `${String(user.location.state).trim()},`,
      user.location.postcode,
    ]),
    email: user.email,
    username: user.login.username,
    title: normalizeData([user.name.title, user.name.first, user.name.last, `[${user.nat}]`]),
  };
};

button.onclick = async (): Promise<void> => {
  removeUserTable();
  removeErrorField();

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
    const data: RandomUserData = await response.json();
    const user: UserData = data.results[0];
    
    createUserTable();
    createUserTableHeader();

    const userData: User = createUserTableRow(user);

    const table: HTMLElement = document.getElementById("user");
    const trRow: HTMLTableRowElement = document.createElement("tr");
    tableHead.forEach((name) => {
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
    createErrorField(error);
    return;
  }
};
