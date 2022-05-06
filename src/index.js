import './styles/style.scss';
import { renderKeys } from './js/renderKeys';
import { createDescr } from './js/createDescr';

import enLangKeys from './utils/EnKeysMap';
import ruLangKeys from './utils/RuKeysMap';

const app = document.querySelector('.app');
let selectedCase = 'caseDown'; // caseDown, caseUp, shift
let selectedLang = localStorage.getItem('selectedLang')
  ? JSON.parse(localStorage.getItem('selectedLang'))
  : enLangKeys;
let keysArray = renderKeys(selectedLang, selectedCase);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const clickHandler = () => {};

const createKeyboard = (keysArray) => {
  localStorage.setItem('selectedLang', JSON.stringify(selectedLang));

  const rowArray = [];
  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.classList.add('row', `row-${i + 1}`);
    rowArray.push(row);
  }
  keysArray.forEach((key, i) => {
    if (i < 14) rowArray[0].append(key);
    if (i >= 14 && i < 29) rowArray[1].append(key);
    if (i >= 29 && i < 42) rowArray[2].append(key);
    if (i >= 42 && i < 55) rowArray[3].append(key);
    if (i >= 55) rowArray[4].append(key);
  });

  keyboard.innerHTML = '';
  keyboard.append(...rowArray);
  app.append(keyboard);
};

// const pressHandler = (event, keysArray) => {
//   const input = document.querySelector('.input');

//   keysArray.forEach((key) => {
//     if (event.key == key.textContent) {
//       key.classList.add('active');
//     }
//   });
// };

const changeLang = (e) => {
  if (e.keyCode == 18 && window.event.ctrlKey) {
    selectedLang === ruLangKeys ? (selectedLang = enLangKeys) : (selectedLang = ruLangKeys);

    createKeyboard(renderKeys(selectedLang, selectedCase));
  }
};

window.addEventListener('DOMContentLoaded', () => {
  createDescr();
  createKeyboard(renderKeys(selectedLang, selectedCase));
  clickHandler(renderKeys(selectedLang, selectedCase));
});

window.addEventListener('keydown', (event) => {
  changeLang(event);
  // pressHandler(event, renderKeys(selectedLang, selectedCase));
});
