const button: HTMLButtonElement = document.body.querySelector('button') as HTMLButtonElement;

type UserPhoto = HTMLElement;
type UserName = string;
type UserGender = 'male' | 'female' | 'other';
type UserAge = number;
type UserPhone = string;
type UserAddress = string;
type UserEmail = string;
type UserTitle= string;
type UserTableColumnNames = string[];

interface User {
  photo: UserPhoto;
  name: UserName;
  gender: UserGender;
  age: UserAge;
  phone: UserPhone;
  address: UserAddress;
  email: UserEmail;
  username: UserName;
  title: UserTitle;
}

const tableColumnNames: UserTableColumnNames = [
  'photo',
  'name',
  'gender',
  'age',
  'phone',
  'address',
  'email',
];

interface UserData {
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  gender: UserGender;
  dob: {
    age: UserAge;
  };
  cell: UserPhone;
  location: {
    street: {
      number: number;
      name: string;
    };
    country: string;
    state: string;
    postcode: string;
  };
  email: UserEmail;
  login: {
    username: UserName;
  };
  nat: string;
}

interface RandomUserData {
  results: UserData[];
}

const createUserTable = (): HTMLTableElement => {
  const userTable: HTMLTableElement = document.createElement('table');
  userTable.id = 'user';
  return userTable;
};

const createUserTableHeader = (tableHeaderData: UserTableColumnNames): HTMLTableRowElement => {
  const headerRow: HTMLTableRowElement = document.createElement('tr');

  tableHeaderData.forEach((columnName) => {
    const columnHeader: HTMLTableCellElement = document.createElement('th');
    columnHeader.innerText = String(columnName[0].toUpperCase() + columnName.slice(1));
    headerRow.appendChild(columnHeader);
  });

  return headerRow;
};

const createUserTableRow = (user: User, columnNames: UserTableColumnNames): HTMLTableRowElement => {
  const userTableRow: HTMLTableRowElement = document.createElement('tr');

  columnNames.forEach((columnName) => {
    if (columnName === 'username' || columnName === 'title') {
      return;
    }
    const userTableCell: HTMLTableCellElement = document.createElement('td');
    if (columnName === 'photo') {
      userTableCell.appendChild(user[columnName]);
    } else {
      userTableCell.innerText = String(user[columnName]);
    }
    userTableRow.appendChild(userTableCell);
  });

  return userTableRow;
};

const createErrorField = (errorData: {
  status: number;
  message?: string;
  stack?: string
}): HTMLElement => {
  const errorContainer: HTMLElement = document.createElement('div');
  errorContainer.id = 'error';
  const errorTextElement: HTMLElement = document.createElement('pre');
  errorTextElement.textContent = Object.keys(errorData)
    .map((key: string) => {
      let value: string = String(errorData[key]);

      if (key === 'stack') {
        value = value.replace(/\n/g, '\n\t');
      }
      return `${key}: ${value}`;
    })
    .join('\n');

  errorContainer.appendChild(errorTextElement);
  return errorContainer;
};

const normalizeUserData = (userDataArray: string[]): string => [userDataArray]
  .flat(2)
  .join(' ')
  .replace(/ +/, ' ')
  .trim();

const createPhotoElement = (userData: UserData) => {
  const imgElement: HTMLImageElement = document.createElement('img');
  imgElement.src = userData.picture.medium;
  imgElement.alt = userData.login.username;
  const titleData = [
    userData.name.title,
    userData.name.first,
    userData.name.last,
    `[${userData.nat}]`,
  ];
  imgElement.title = normalizeUserData(titleData);
  return imgElement;
};

const getUserData = (userData: UserData): User => ({
  photo: createPhotoElement(userData),
  name: normalizeUserData([userData.name.first, userData.name.last]),
  gender: userData.gender as UserGender,
  age: userData.dob.age,
  phone: userData.cell,
  address: normalizeUserData([
    `${String(userData.location.street.number).trim()},`,
    userData.location.street.name,
    userData.location.country,
    `${String(userData.location.state).trim()},`,
    userData.location.postcode,
  ]),
  email: userData.email,
  username: userData.login.username,
  title: normalizeUserData([
    userData.name.title, userData.name.first, userData.name.last, `[${userData.nat}
  ]`]),
});

const removeUserTable = () => {
  const userTable: HTMLElement | null = document.getElementById('user');
  if (userTable) {
    userTable.remove();
  }
};

const removeErrorField = () => {
  const errorField: HTMLElement | null = document.getElementById('error');
  if (errorField) {
    errorField.remove();
  }
};

const removeErrorAndTableData = () => {
  removeUserTable();
  removeErrorField();
};

button.onclick = async (): Promise<void> => {
  button.disabled = true;
  let userDataResponse: RandomUserData = {} as RandomUserData;
  const errorData: { status: number; message?: string; stack?: string } = {
    status: 0,
  };

  try {
    const response: Response = await fetch('https://randomuser.me/api/');
    userDataResponse = await response.json();

    if (!response.ok) {
      errorData.status = response.status;
      throw Error(response.statusText);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      errorData.message = e.message;
      errorData.stack = e.stack || '';
    } else if (typeof e === 'string') {
      errorData.message = e;
    } else {
      errorData.message = 'An unknown error occurred.';
    }

    button.disabled = false;
    removeErrorAndTableData();
    document.body.appendChild(createErrorField(errorData));
    return;
  }

  const userDataResults: RandomUserData = userDataResponse;
  const user: UserData = userDataResults.results[0];

  removeErrorAndTableData();

  const userTable: HTMLTableElement = createUserTable();
  userTable.appendChild(createUserTableHeader(tableColumnNames));
  userTable.appendChild(createUserTableRow(getUserData(user), tableColumnNames));
  document.body.appendChild(userTable);

  button.disabled = false;
};
