import './styles/style.scss';
import { renderKeys } from './js/renderKeys';

import enLangKeys from './utils/EnKeysMap';
import ruLangKeys from './utils/RuKeysMap';

const selectedCase = 'caseDown'; // caseDown, caseUp, shift
const keysArray = renderKeys(enLangKeys, selectedCase);

const firstLoading = () => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('container');

  const rowArray = [];
  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    rowArray.push(row);
  }

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard-wrapper');

  keysArray.forEach((key, i) => {
    if (i < 14) rowArray[0].append(key);
    if (i >= 14 && i < 29) rowArray[1].append(key);
    if (i >= 29 && i < 42) rowArray[2].append(key);
    if (i >= 42 && i < 55) rowArray[3].append(key);
    if (i >= 55) rowArray[4].append(key);
  });

  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');

  keyboard.append(...rowArray);
  document.body.append(textArea, keyboard);
};

window.addEventListener('DOMContentLoaded', firstLoading);
