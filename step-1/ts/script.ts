const button: HTMLButtonElement | null = document.body.querySelector('button');
const body: HTMLElement | null = document.querySelector('body');

interface User {
  photo: string;
  name: string;
  gender: string;
  age: number;
  phone: string;
  address: string;
  email: string;
  username?: string; 
  title?: string;
}

const createUserTable = function (user: User): void {
    const table: HTMLTableElement = document.createElement('table');

  };


button?.addEventListener('click', async () => {
  await fetchHandler()
});

async function fetchHandler(): Promise<void> {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  return console.log('data', data);
}
