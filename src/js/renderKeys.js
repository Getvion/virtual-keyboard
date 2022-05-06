export const renderKeys = (keys, selectedCase) => {
  const keyWrapperArr = [];

  keys.forEach(({ caseDown, caseUp, shiftCaps }) => {
    const button = document.createElement('button');
    button.classList.add('key');

    if (
      caseDown === 'Backspace' ||
      caseDown === 'CapsLock' ||
      caseDown === 'Enter' ||
      caseDown === 'Shift'
    )
      button.classList.add('key--long');
    if (caseDown === ' ') button.classList.add('key--very-long');

    if (selectedCase === 'caseDown') button.textContent = caseDown;
    if (selectedCase === ('caseUp' || 'caps')) button.textContent = caseUp;
    if (selectedCase === 'shift') button.textContent = shiftCaps;
    return keyWrapperArr.push(button);
  });

  return keyWrapperArr;
};
