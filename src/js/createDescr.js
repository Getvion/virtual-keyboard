export const createDescr = () => {
  const body = document.body;

  const container = document.createElement('div');
  container.classList.add('container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Virtual Keyboard';

  const descr = document.createElement('p');
  descr.classList.add('descr');
  descr.textContent = 'Разработка велась на Windows, для смены языка нажмите Shift + Alt';

  container.append(title, descr);
  body.append(container);
};
