export const createDescr = () => {
  const app = document.querySelector('.app');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('container');
  contentContainer.innerHTML = `
      <h1 class='title'>Virtual Keyboard</h1>
      <p class="descr">Разработка велась на Windows, ctrl + alt - смена языка </p>
      <input class="input">
    `;

  app.append(contentContainer);
};
