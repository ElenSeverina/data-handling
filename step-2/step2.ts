import { 
  createUserTable,
  createUserTableHeader, 
  createUserTableRow as createUserTableRowOne,
  createErrorField,
  normalizeData,
  removeUserTable,
  removeErrorField,
} from '../step-1/ts/script-1';


function createUserTableRow() {
  try {
    for (let i = 0; i < 5; i++) {
      return createUserTableRowOne();
    }

    setTimeout(async () => {
      for (let i = 0; i < 5; i++) {
        return createUserTableRowOne();
      }
    }, 2000);
  } catch (error) {
    createErrorField(error);
    return;
  }
}


const button: HTMLElement = document.querySelector('.btn');

button.onclick = async () => {
  try {
    const results = await Promise.all([
      createUserTable(), 
      createUserTableHeader(), 
      createUserTableRow(), 
      normalizeData(),
      removeUserTable(),
      removeErrorField(),
    ]);
    console.log(results);
  } catch (error) {
    createErrorField(error);
  }
};


button.onclick = () => {
  const loader: HTMLElement = document.querySelector('.loader');
  button.style.color = 'transparent';
  loader.style.display = 'block';
  setTimeout(() => {
    loader.style.display = 'none';
    button.style.color = 'black';
  }, 3000);
}
