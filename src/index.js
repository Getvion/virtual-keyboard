import { generateKeys } from './js/generateKeys';

import './styles/style.scss';

const keysArr = generateKeys();
const app = document.querySelector('.app');

const fitrstLoad = () => {
  const row1 = document.createElement('div');
  const row2 = document.createElement('div');
  const row3 = document.createElement('div');
  const row4 = document.createElement('div');
  const row5 = document.createElement('div');
  const rowArr = [row1, row2, row3, row4, row5];

  rowArr.forEach((el) => el.classList.add('row'));

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  for (let i = 0; i < keysArr.length; i += 1) {
    if (i < 14) row1.append(keysArr[i]);
    if (i >= 14 && i < 29) row2.append(keysArr[i]);
    if (i >= 29 && i < 42) row3.append(keysArr[i]);
    if (i >= 42 && i < 55) row4.append(keysArr[i]);
    if (i >= 55) row5.append(keysArr[i]);
  }

  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');

  keyboard.append(...rowArr);
  app.append(textArea, keyboard);
};

window.addEventListener('DOMContentLoaded', fitrstLoad);
