import './styles/style.scss';
import { renderKeys } from './js/renderKeys';

import enLangKeys from './utils/EnKeysMap';
import ruLangKeys from './utils/RuKeysMap';

const app = document.querySelector('.app');
let selectedCase = 'caseDown'; // caseDown, caseUp, shift
let selectedLang = ruLangKeys;

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const createDescr = () => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('container');
  contentContainer.innerHTML = `
      <h1 class='title'>Virtual Keyboard</h1>
      <p class="descr">Разработка велась на Windows, ctrl + alt - смена языка </p>
      <input class="input">
    `;

  app.append(contentContainer);
};

const createKeyboard = (keysArray) => {
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

const changeLang = (e) => {
  if (e.keyCode == 18 && window.event.ctrlKey) {
    selectedLang === ruLangKeys ? (selectedLang = enLangKeys) : (selectedLang = ruLangKeys);

    createKeyboard(renderKeys(selectedLang, selectedCase));
  }
};

window.addEventListener('DOMContentLoaded', () => {
  createDescr();
  createKeyboard(renderKeys(selectedLang, selectedCase));
});

window.addEventListener('keydown', changeLang);
