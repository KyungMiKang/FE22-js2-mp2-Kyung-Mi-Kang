//import { Tamagotchi } from './modules/feedplay.js';

import { DeliverTama } from './modules/createTama.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const container = document.querySelector('#container');
  const nameInput = document.querySelector('#pet-name');
  const typeInput = document.querySelector('#select-type');

  const name = nameInput.value;
  const type = typeInput.value;

  //const tamagotchi = new Tamagotchi(name, type);

  const tama = new DeliverTama(
    name,
    type,
    document.getElementById('container')
  );

  nameInput.value = '';
  typeInput.value = '';
});
