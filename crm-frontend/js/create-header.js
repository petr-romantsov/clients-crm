
export const createHeader = () => {
  const header = document.createElement('header');
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const logo = document.createElement('a');
  const logoImg = document.createElement('img');
  const form = document.createElement('form');
  const input = document.createElement('input');

  header.classList.add('header');
  container.classList.add('container', 'header__container');
  wrapper.classList.add('header__wrapper');
  logo.classList.add('logo', 'header__logo');
  logoImg.classList.add('logo__img');
  form.classList.add('header__form');
  input.classList.add('header__input');

  input.type = 'text';
  input.placeholder = 'Введите запрос';
  logoImg.src = './img/skb-logo.svg';
  logoImg.alt = 'SKB logo';

  logo.append(logoImg);
  form.append(input);
  wrapper.append(logo, form);
  container.append(wrapper);
  header.append(container);

  return header;
}
