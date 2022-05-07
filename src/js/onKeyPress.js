export const onKeyPress = (event, keysArr) => {
  event.preventDefault();
  const textarea = document.querySelector('.textarea');

  keysArr.forEach((key) => {
    const arr = Array.from(key.children);
    const filteredArr = arr.filter((elem) => !elem.classList.contains('hidden'))[0].children;

    const TabKey = key.classList.contains('Tab');
    const CapsLockKey = key.classList.contains('CapsLock');
    const WinKey = key.classList.contains('MetaLeft');
    const BackspaceKey = key.classList.contains('Backspace');
    const EnterKey = key.classList.contains('Enter');
    const DeleteKey = key.classList.contains('Delete');
    const ControlKey =
      key.classList.contains('ControlLeft') || key.classList.contains('ControlRight');
    const ShiftKey = key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight');
    const AltKey = key.classList.contains('AltLeft') || key.classList.contains('AltRight');

    const eventKeyDown = event.type === 'keydown';
    const eventKeyUp = event.type === 'keyup';

    const eventCodeCheck = key.classList.contains(`${event.code}`);
    const eventCodeCaps = event.code === 'CapsLock';

    // ОБРАБОТКА НАЖАТИЯ НА ШИФТ
    // const eventShift = event.code === 'ShiftLeft' || event.code === 'ShiftRight';

    // let isShiftPress = false;
    // if (eventKeyDown && eventShift) isShiftPress = true;
    // if (eventKeyUp && eventShift) isShiftPress = false;

    // if (isShiftPress && !CapsLockKey) {
    //   Array.from(filteredArr)
    //     .filter((key) => key.classList.contains('caseDown'))[0]
    //     .classList.add('hidden');

    //   Array.from(filteredArr)
    //     .filter((key) => key.classList.contains('caseUp'))[0]
    //     .classList.remove('hidden');
    // }

    // if (!isShiftPress && !CapsLockKey) {
    //   Array.from(filteredArr)
    //     .filter((key) => key.classList.contains('caseDown'))[0]
    //     .classList.remove('hidden');

    //   Array.from(filteredArr)
    //     .filter((key) => key.classList.contains('caseUp'))[0]
    //     .classList.add('hidden');
    // }

    if (!CapsLockKey && eventCodeCheck && eventKeyDown) key.classList.add('active');
    if (!CapsLockKey && eventCodeCheck && eventKeyUp) key.classList.remove('active');

    if (CapsLockKey && eventKeyDown && eventCodeCaps) key.classList.toggle('active');

    if (eventKeyDown && eventCodeCaps) {
      Array.from(filteredArr)
        .filter((key) => key.classList.contains('caseDown'))[0]
        .classList.toggle('hidden');

      Array.from(filteredArr)
        .filter((key) => key.classList.contains('caps'))[0]
        .classList.toggle('hidden');
    }

    if (TabKey && eventKeyDown && event.code === 'Tab') textarea.value += '    ';
    if (EnterKey && eventKeyDown && event.code === 'Enter') textarea.value += '\n';

    if (
      !TabKey &&
      !CapsLockKey &&
      !WinKey &&
      !AltKey &&
      !ControlKey &&
      !BackspaceKey &&
      !EnterKey &&
      !ShiftKey &&
      !DeleteKey &&
      eventCodeCheck &&
      eventKeyDown
    ) {
      const filteredArrWithoutHiddens = Array.from(filteredArr).filter(
        (item) => !item.classList.contains('hidden')
      )[0].textContent;
      textarea.value += filteredArrWithoutHiddens;
    }
  });
};
