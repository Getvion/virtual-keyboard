import { createDescr } from './js/createDescr';

import './styles/style.scss';

import { firstRow, secondRow, thirdRow, fourthRow, fifthRow } from './utils/keys';

window.onload = function () {
  const body = document.body;

  if (localStorage.getItem('language') === null) localStorage.setItem('language', 'en');

  let lang = localStorage.getItem('language');

  let textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  let keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  createDescr();
  body.append(textarea, keyboard);

  let row = [];
  for (let i = 0; i < 5; i++) {
    row[i] = document.createElement('div');
    row[i].className = 'row';
    document.body.append(row[i]);
  }

  let firstRowKeys = [];
  let secondRowKeys = [];
  let thirdRowKeys = [];
  let fourthRowKeys = [];
  let fifthRowKeys = [];

  //класс "кнопка"
  class Key {
    constructor(name, enSpan, enShiftSpan, ruSpan, ruShiftSpan, parent) {
      this.name = name;
      this.parent = parent;
      this.enSpanValue = enSpan;
      this.enShiftSpanValue = enShiftSpan;
      this.ruSpanValue = ruSpan;
      this.ruShiftSpanValue = ruShiftSpan;

      this.createKey = () => {
        this.div = document.createElement('div');
        this.div.className = 'key';
        this.div.id = name;
        this.parent.append(this.div);
        this.enSpan = document.createElement('span');
        this.enSpan.innerHTML = this.enSpanValue;
        if (lang == 'en') {
          this.enSpan.className = 'show';
          this.curSpan = enSpan;
        } else {
          this.enSpan.className = 'hide';
        }
        this.div.append(this.enSpan);
        this.enShiftSpan = document.createElement('span');
        this.enShiftSpan.innerHTML = this.enShiftSpanValue;
        this.enShiftSpan.className = 'hide';
        this.div.append(this.enShiftSpan);
        this.ruSpan = document.createElement('span');
        this.ruSpan.innerHTML = this.ruSpanValue;
        if (lang == 'ru') {
          this.ruSpan.className = 'show';
          this.curSpan = ruSpan;
        } else {
          this.ruSpan.className = 'hide';
        }
        this.div.append(this.ruSpan);
        this.ruShiftSpan = document.createElement('span');
        this.ruShiftSpan.innerHTML = this.ruShiftSpanValue;
        this.ruShiftSpan.className = 'hide';
        this.div.append(this.ruShiftSpan);
        this.spans = this.div.children;
      };

      this.switchLanguage = () => {
        if (this.enSpan.className == 'show') {
          this.enSpan.className = 'hide';
          this.ruSpan.className = 'show';
          this.curSpan = ruSpan;
          localStorage.setItem('language', 'ru');
          lang = 'ru';
        } else if (this.ruSpan.className == 'show') {
          this.ruSpan.className = 'hide';
          this.enSpan.className = 'show';
          this.curSpan = enSpan;
          localStorage.setItem('language', 'en');
          lang = 'en';
        } else if (this.enShiftSpan.className == 'show') {
          this.enShiftSpan.className = 'hide';
          this.ruShiftSpan.className = 'show';
          this.curSpan = ruShiftSpan;
          localStorage.setItem('language', 'ru');
          lang = 'ru';
        } else if (this.ruShiftSpan.className == 'show') {
          this.ruShiftSpan.className = 'hide';
          this.enShiftSpan.className = 'show';
          this.curSpan = enShiftSpan;
          localStorage.setItem('language', 'en');
          lang = 'en';
        }
      };

      this.switchCase = () => {
        if (lang == 'en') {
          if (this.enSpan.className == 'show') {
            this.enSpan.className = 'hide';
            this.enShiftSpan.className = 'show';
            this.curSpan = enShiftSpan;
          } else {
            this.enSpan.className = 'show';
            this.curSpan = enSpan;
            this.enShiftSpan.className = 'hide';
          }
        } else {
          if (this.ruSpan.className == 'show') {
            this.ruSpan.className = 'hide';
            this.ruShiftSpan.className = 'show';
            this.curSpan = ruShiftSpan;
          } else {
            this.ruSpan.className = 'show';
            this.curSpan = ruSpan;
            this.ruShiftSpan.className = 'hide';
          }
        }
      };
    }
  }

  //первый ряд
  for (let i = 0; i < firstRow.length; i++) {
    firstRowKeys[i] = new Key(
      firstRow[i][0],
      firstRow[i][1],
      firstRow[i][2],
      firstRow[i][3],
      firstRow[i][4],
      row[0]
    );
    firstRowKeys[i].createKey();
  }
  firstRowKeys[firstRow.length - 1].div.style.width = '100px';
  firstRowKeys[firstRow.length - 1].div.style.fontSize = '16px';

  //второй ряд
  for (let i = 0; i < secondRow.length; i++) {
    secondRowKeys[i] = new Key(
      secondRow[i][0],
      secondRow[i][1],
      secondRow[i][2],
      secondRow[i][3],
      secondRow[i][4],
      row[1]
    );
    secondRowKeys[i].createKey();
  }
  secondRowKeys[0].div.style.width = '75px';
  secondRowKeys[0].div.style.fontSize = '24px';
  secondRowKeys[secondRow.length - 1].div.style.width = '75px';
  secondRowKeys[secondRow.length - 1].div.style.fontSize = '16px';

  //третий ряд
  for (let i = 0; i < thirdRow.length; i++) {
    thirdRowKeys[i] = new Key(
      thirdRow[i][0],
      thirdRow[i][1],
      thirdRow[i][2],
      thirdRow[i][3],
      thirdRow[i][4],
      row[2]
    );
    thirdRowKeys[i].createKey();
  }
  thirdRowKeys[0].div.style.width = '75px';
  thirdRowKeys[0].div.style.fontSize = '12px';
  thirdRowKeys[thirdRow.length - 1].div.style.width = '75px';
  thirdRowKeys[thirdRow.length - 1].div.style.fontSize = '16px';

  //четвертый ряд
  for (let i = 0; i < fourthRow.length; i++) {
    fourthRowKeys[i] = new Key(
      fourthRow[i][0],
      fourthRow[i][1],
      fourthRow[i][2],
      fourthRow[i][3],
      fourthRow[i][4],
      row[3]
    );
    fourthRowKeys[i].createKey();
  }
  fourthRowKeys[0].div.style.width = '130px';
  fourthRowKeys[0].div.style.fontSize = '20px';
  fourthRowKeys[fourthRow.length - 1].div.style.width = '130px';
  fourthRowKeys[fourthRow.length - 1].div.style.fontSize = '20px';

  //пятый ряд
  for (let i = 0; i < fifthRow.length; i++) {
    fifthRowKeys[i] = new Key(
      fifthRow[i][0],
      fifthRow[i][1],
      fifthRow[i][2],
      fifthRow[i][3],
      fifthRow[i][4],
      row[4]
    );
    fifthRowKeys[i].createKey();
    fifthRowKeys[i].div.style.width = '75px';
    fifthRowKeys[i].div.style.fontSize = '16px';
  }
  fifthRowKeys[2].div.style.width = '490px';
  let allRowKeys = [];
  allRowKeys = firstRowKeys.concat(secondRowKeys, thirdRowKeys, fourthRowKeys, fifthRowKeys);

  //обработка нажатий
  let shiftDown = false;
  let capsOn = false;
  document.addEventListener('keydown', (e) => {
    allRowKeys.forEach((x) => {
      if (e.code === x.name) {
        if (e.code === 'CapsLock') {
          if (!capsOn) {
            x.div.style.background = 'blue';
            x.div.style.transform = 'scale(0.9)';
            capsOn = true;
            for (let i = 13; i < allRowKeys.length; i++) {
              allRowKeys[i].switchCase();
            }
          } else if (capsOn) {
            x.div.style.background = 'black';
            x.div.style.transform = 'scale(1)';
            capsOn = false;
            for (let i = 13; i < allRowKeys.length; i++) {
              allRowKeys[i].switchCase();
            }
          }
          return;
        }
        x.div.style.background = 'blue';
        x.div.style.transform = 'scale(0.9)';
        if (e.altKey && e.shiftKey) {
          allRowKeys.forEach((x) => {
            x.switchLanguage();
          });
        }
        if (e.code === 'Tab') {
          e.preventDefault();
          textarea.value = textarea.value + '\t';
        } else if (e.code === 'Enter') {
          e.preventDefault();
          textarea.value = textarea.value + '\n';
        } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          if (!shiftDown) {
            shiftDown = true;
            allRowKeys.forEach((x) => {
              x.switchCase();
            });
          }
        } else if (e.code === 'Delete') {
          e.preventDefault();
          textarea.value = textarea.value.substr(1, textarea.value.length);
        } else if (e.code === 'Backspace') {
          e.preventDefault();
          textarea.value = textarea.value.substr(0, textarea.value.length - 1);
        } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
          e.preventDefault();
        } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
          e.preventDefault();
        } else if (e.target != textarea) {
          textarea.value = textarea.value + x.curSpan;
        }
      }
    });
  });
  document.addEventListener('keyup', (e) => {
    allRowKeys.forEach((x) => {
      if (e.code === x.name) {
        if (e.code != 'CapsLock') {
          x.div.style.background = 'black';
          x.div.style.transform = 'scale(1)';
          if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            shiftDown = false;
            allRowKeys.forEach((x) => {
              x.switchCase();
            });
          }
        }
      }
    });
  });

  //обработка мыши
  let clickTarget = '';
  document.addEventListener('mousedown', (e) => {
    let event = new Event('keydown');
    event.code = e.target.id;
    clickTarget = e.target.id;
    document.dispatchEvent(event);
  });
  document.addEventListener('mouseup', (e) => {
    let event = new Event('keyup');
    event.code = clickTarget;
    document.dispatchEvent(event);
  });
};
