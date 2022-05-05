export const renderKeys = (keys, selectedCase) => {
  const keyWrapperArr = [];

  keys.forEach(({ caseDown, caseUp, shiftCaps }) => {
    const button = document.createElement('button');
    button.classList.add('key');

    if (selectedCase === 'caseDown') button.textContent = caseDown;
    if (selectedCase === ('caseUp' || 'caps')) button.textContent = caseUp;
    if (selectedCase === 'shift') button.textContent = shiftCaps;

    keyWrapperArr.push(button);
  });

  return keyWrapperArr;
};
