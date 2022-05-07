export const onKeyClick = (event, keysArr) => {
  const textarea = document.querySelector('.textarea');
  const arr = Array.from(event.currentTarget.children);
  const filteredArr = arr.filter((elem) => !elem.classList.contains('hidden'))[0].children;

  const TabKey = event.currentTarget.classList.contains('Tab');
  const CapsLockKey = event.currentTarget.classList.contains('CapsLock');
  const WinKey = event.currentTarget.classList.contains('MetaLeft');
  const BackspaceKey = event.currentTarget.classList.contains('Backspace');
  const EnterKey = event.currentTarget.classList.contains('Enter');
  const DeleteKey = event.currentTarget.classList.contains('Delete');
  const ControlKey =
    event.currentTarget.classList.contains('ControlLeft') ||
    event.currentTarget.classList.contains('ControlRight');
  const ShiftKey =
    event.currentTarget.classList.contains('ShiftLeft') ||
    event.currentTarget.classList.contains('ShiftRight');
  const AltKey =
    event.currentTarget.classList.contains('AltLeft') ||
    event.currentTarget.classList.contains('AltRight');

  if (CapsLockKey && event.type !== 'mouseup') event.currentTarget.classList.toggle('active');

  if (CapsLockKey && event.type !== 'mouseup') {
    keysArr.forEach((el) => {
      const keyArr = Array.from(el.children);
      const filteredKeyArr = keyArr.filter((elem) => !elem.classList.contains('hidden'))[0]
        .children;

      Array.from(filteredKeyArr)
        .filter((elem) => elem.classList.contains('caseDown'))[0]
        .classList.toggle('hidden');
      Array.from(filteredKeyArr)
        .filter((elem) => elem.classList.contains('caps'))[0]
        .classList.toggle('hidden');
    });
  }

  if (TabKey && event.type !== 'mouseup') textarea.value += '    ';
  if (EnterKey && event.type !== 'mouseup') textarea.value += '\n';

  if (
    event.type !== 'mouseup' &&
    !TabKey &&
    !CapsLockKey &&
    !ShiftKey &&
    !ControlKey &&
    !WinKey &&
    !AltKey &&
    !BackspaceKey &&
    !EnterKey &&
    !DeleteKey
  ) {
    const filteredArrWithoutHiddens = Array.from(filteredArr).filter(
      (item) => !item.classList.contains('hidden')
    )[0].textContent;
    textarea.value += filteredArrWithoutHiddens;
  }
};
