import keys from '../utils/keys';

export const generateKeys = () => {
  const keysArray = [];
  Object.entries(keys).forEach((key) => {
    // 0 элемент - название кнопки
    // 1 элемент - объект объкектов с языками
    const keysInner = document.createElement('div');
    keysInner.classList.add('key', `${key[0]}`);

    const ruLettersWrapper = document.createElement('div');
    ruLettersWrapper.classList.add('ru', 'hidden');

    const enLettersWrapper = document.createElement('div');
    enLettersWrapper.classList.add('en');

    Object.entries(key[1]).forEach((item) => {
      // 0 элемент - язык
      // 1 элемент - объект с данными

      Object.entries(item[1]).forEach((element) => {
        // 0 элемент - регистр
        // 1 элемент - символ

        const span = document.createElement('span');
        span.textContent = element[1];

        // вставляю кнопки в обертки по языкам
        if (item[0] === 'ru') ruLettersWrapper.append(span);
        if (item[0] === 'en') enLettersWrapper.append(span);

        // делаю все кнопки кроме кнопки в нижнем регистре скрытыми
        if (element[0] === 'caseDown') {
          span.classList.add(`${element[0]}`);
        } else {
          span.classList.add(`${element[0]}`, 'hidden');
        }
      });
    });
    ruLettersWrapper.childNodes.forEach((el) => el.classList.add('hidden'));

    keysInner.append(ruLettersWrapper, enLettersWrapper);
    keysArray.push(keysInner);
  });

  return keysArray;
};
