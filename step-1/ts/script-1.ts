const button: HTMLButtonElement = document.body.querySelector('button')!;
const tableHead: string[] = [
  'photo',
  'name',
  'gender',
  'age',
  'phone',
  'address',
  'email',
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

const createUserTable = (): HTMLTableElement => {
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'user';
  return table;
};

const createUserTableHeader = (data: string[]): HTMLTableRowElement => {
  const trHead: HTMLTableRowElement = document.createElement('tr');

  data.forEach((name: string) => {
    const th: HTMLTableCellElement = document.createElement('th');
    th.innerText = String(name[0].toUpperCase() + name.slice(1));
    trHead.appendChild(th);
  });

  return trHead;
};

const createUserTableRow = (user: any, data: string[]): HTMLTableRowElement => {
  const trRow: HTMLTableRowElement = document.createElement('tr');

  data.forEach((name) => {
    if (name === 'username' || name === 'title') {
      return;
    }
    const td: HTMLTableCellElement = document.createElement('td');
    if (name === 'photo') {
      td.innerHTML = user[name];
    } else {
      td.innerText = String(user[name]);
    }
    trRow.appendChild(td);
  });

  return trRow;
};

const createErrorField = (obj: { [key: string]: any }): HTMLElement => {
  const error: HTMLElement = document.createElement('div');
  error.id = 'error';
  const preElement: HTMLElement = document.createElement('pre');
  preElement.textContent = Object.keys(obj)
    .map((key: string) => {
      let value: string = String(obj[key]);

      if (key === 'stack') {
        value = value.replace(/\n/g, '\n\t');
      }
      return `${key}: ${value}`;
    })
    .join('\n');

  error.appendChild(preElement);
  return error;
};

const normalizeData = (str: string[]): string => [str]
  .flat(2)
  .join(' ')
  .replace(/ +/, ' ')
  .trim();

const getUserData = (user: UserData): User => ({
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
});

const removeUserTable = (): void => {
  const table: HTMLElement | null = document.getElementById('user');
  if (table) {
    table.remove();
  }
};

const removeErrorField = (): void => {
  const errorField: HTMLElement | null = document.getElementById('error');
  if (errorField) {
    errorField.remove();
  }
};

const clearPreviousData = (): void => {
  removeUserTable();
  removeErrorField();
};

button.onclick = async (): Promise<void> => {
  button.disabled = true;
  let data: any = {};
  const error: { status: number; message?: string; stack?: string } = {
    status: 0,
  };

  try {
    const response: Response = await fetch('https://randomuser.me/api/');
    data = await response.json();

    if (!response.ok) {
      error.status = response.status;
      throw Error(response.statusText);
    }
  } catch (e: any) {
    error.message = e.message;
    error.stack = e.stack;
    button.disabled = false;
    clearPreviousData();
    document.body.appendChild(createErrorField(error));
    return;
  }

  const results: RandomUserData = data;
  const user: UserData = results.results[0];

  clearPreviousData();

  const table: HTMLTableElement = createUserTable();
  table.appendChild(createUserTableHeader(tableHead));
  table.appendChild(createUserTableRow(getUserData(user), tableHead));
  document.body.appendChild(table);

  button.disabled = false;
};
