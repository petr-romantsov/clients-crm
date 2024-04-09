import { svgAddContact } from "./svg.js";

export const createClientsSection = () => {
  const main = document.createElement('main');
  const section = document.createElement('section');
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const theadTR = document.createElement('tr');
  const idTH = document.createElement('th');
  const idSpan = document.createElement('span');
  const fioTH = document.createElement('th');
  const fioSpan = document.createElement('span');
  const createTH = document.createElement('th');
  const createSpan = document.createElement('span');
  const changeTH = document.createElement('th');
  const changeSpan = document.createElement('span');
  const contactsTH = document.createElement('th');
  const actionsTH = document.createElement('th');
  const tbody = document.createElement('tbody');
  const addClientBtn = document.createElement('button');
  const addClientBtnSVG = document.createElement('span');

  main.classList.add('main');
  section.classList.add('clients');
  container.classList.add('container', 'clients__container');
  title.classList.add('clients__title');
  table.classList.add('table', 'clients__table');
  idTH.classList.add('table__heading', 'table__heading--id');
  idSpan.classList.add('table__span', 'table__span--id');
  fioTH.classList.add('table__heading');
  fioSpan.classList.add('table__span', 'table__span--fio');
  createTH.classList.add('table__heading');
  createSpan.classList.add('table__span', 'table__span--create');
  changeTH.classList.add('table__heading');
  changeSpan.classList.add('table__span', 'table__span--change');
  contactsTH.classList.add('table__heading');
  actionsTH.classList.add('table__heading')
  tbody.classList.add('table__tbody');
  addClientBtn.classList.add('clients__btn', 'btn-reset');

  title.textContent = 'Клиенты';
  idSpan.textContent = 'ID';
  fioTH.textContent = 'Фамилия Имя Отчество';
  fioSpan.textContent = 'А-Я';
  createTH.textContent = 'Дата и время создания';
  changeTH.textContent = 'Последние изменения';
  contactsTH.textContent = 'Контакты';
  actionsTH.textContent = 'Действия';
  addClientBtn.textContent = 'Добавить клиента';
  addClientBtnSVG.innerHTML = svgAddContact;

  addClientBtn.prepend(addClientBtnSVG);
  idTH.append(idSpan);
  fioTH.append(fioSpan);
  createTH.append(createSpan);
  changeTH.append(changeSpan);
  theadTR.append(idTH, fioTH, createTH, changeTH, contactsTH, actionsTH);
  thead.append(theadTR);
  table.append(thead, tbody);
  container.append(title, table, addClientBtn);
  section.append(container);
  main.append(section);

  return {
    main,
    table,
    tbody,
  }
}
