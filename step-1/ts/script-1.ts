const button = document.body.querySelector("button") as HTMLButtonElement;
const tableHead: string[] = [
  "photo",
  "name",
  "gender",
  "age",
  "phone",
  "address",
  "email",
];
interface User {
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

interface UserData {
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

interface RandomUserData {
  results: UserData[];
}

const createUserTable = function (): void {
  const table: HTMLTableElement = document.createElement("table");
  table.id = "user";
  document.body.appendChild(table);
  button.disabled = false;
};

const createUserTableHeader = function (): void {
  createUserTable();

  const trHead: HTMLTableRowElement = document.createElement("tr");
  const table: HTMLElement = document.getElementById("user");
  if (!table) {
    console.error("Table with id 'user' not found.");
    return;
  }

  tableHead.forEach(function (name: string) {
    const thHead: HTMLTableCellElement = document.createElement("th");
    thHead.innerText = String(name[0].toUpperCase() + name.slice(1));
    trHead.appendChild(thHead);
  });
  table.appendChild(trHead);
}

const createUserTableRow = function (user: User): void {
  const table: HTMLElement = document.getElementById("user");
  const trRow: HTMLTableRowElement = document.createElement("tr");
  tableHead.forEach((name) => {
    if (name === "username" || name === "title") {
      return;
    }
    const td: HTMLTableCellElement = document.createElement("td");
    if (name === "photo") {
      const img: HTMLImageElement = document.createElement("img");
      img.src = user[name];
      img.alt = String(user.username);
      img.title = user.title;
      td.appendChild(img);
      trRow.appendChild(td);
      return;
    }
    td.innerText = String(user[name]);
    trRow.appendChild(td);
  });
  table.appendChild(trRow);
  document.body.appendChild(table);
  button.disabled = false;

  document.body.appendChild(table);
};

const createErrorField = (obj: { [key: string]: any }): void => {
  clearPreviousData();
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

const normalizeData = function (str: string[]): string {
  return [str].flat(2).join(" ").replace(/ +/, " ").trim();
};

const removeUserTable = (): void => {
  const table: HTMLElement = document.getElementById("user");
  if (table) {
    table.remove();
  }
  console.log('done');
};

const removeErrorField = (): void => {
  const errorField: HTMLElement = document.getElementById("error");
  if (errorField) {
    errorField.remove();
  }
};

const clearPreviousData = (): void => {
  removeUserTable();
  removeErrorField();
};

const parseUserData = (data: UserData): void => {
  const user: UserData = data;
  createUserTableRow({
    photo: user.picture.medium,
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
    title: normalizeData([
      user.name.title,
      user.name.first,
      user.name.last,
      `[${user.nat}]`,
    ]),
  });
};

button.onclick = async (): Promise<void> => {
  clearPreviousData();
  createUserTableHeader();
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
    parseUserData(user);
  } catch (e: any) {
    error.message = e.message;
    error.stack = e.stack;
    button.disabled = false;
    createErrorField(error);
    return;
  }
};
