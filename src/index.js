import './styles/style.scss';
import { renderKeys } from './js/renderKeys';

import enLangKeys from './utils/EnKeysMap';
import ruLangKeys from './utils/RuKeysMap';

const app = document.querySelector('.app');
let selectedCase = 'caseDown'; // caseDown, caseUp, shift
let keysArray = renderKeys(ruLangKeys, selectedCase);

const showLayout = () => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('container');

  const rowArray = [];
  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.classList.add('row', `row-${i + 1}`);
    rowArray.push(row);
  }

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  keysArray.forEach((key, i) => {
    if (i < 14) rowArray[0].append(key);
    if (i >= 14 && i < 29) rowArray[1].append(key);
    if (i >= 29 && i < 42) rowArray[2].append(key);
    if (i >= 42 && i < 55) rowArray[3].append(key);
    if (i >= 55) rowArray[4].append(key);
  });

  const input = document.createElement('input');
  input.classList.add('input');

  keyboard.append(...rowArray);
  app.append(input, keyboard);
};

const changeLang = (e) => {
  if (e.keyCode == 18 && window.event.ctrlKey) {
    keysArray = renderKeys(enLangKeys, selectedCase);
    showLayout();
  }
};

window.addEventListener('DOMContentLoaded', showLayout);
window.addEventListener('keydown', changeLang);
