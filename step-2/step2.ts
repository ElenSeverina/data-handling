import { 
  createUserTable, 
  createUserTableHeader, 
  createUserTableRow,
  createErrorField,
  normalizeData,
  removeUserTable,
  removeErrorField,
  buttonClickHandler
} from '../step-1/ts/script-1';

createUserTable();
createUserTableHeader();
createUserTableRow();
createErrorField();
normalizeData();
removeUserTable();
removeErrorField();
buttonClickHandler();

const button: HTMLElement = document.querySelector('.btn');
button.onclick = () => {
  const loader: HTMLElement = document.querySelector('.loader');
  button.style.color = 'transparent';
  loader.style.display = 'block';
  setTimeout(() => {
    loader.style.display = 'none';
    button.style.color = 'black';
  }, 3000);
}
