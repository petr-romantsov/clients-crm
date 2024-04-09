import { svgAddContact } from "./svg.js";

export const createClientsForm = () => {

  const modalTitle = document.createElement('h2'),
        modalClose = document.createElement('button'),
        form = document.createElement('form'),
        labelLastname = document.createElement('label'),
        lastnameInp = document.createElement('input'),
        requiredLastname = document.createElement('span'),
        labelName = document.createElement('label'),
        requiredName = document.createElement('span'),
        nameInp = document.createElement('input'),
        labelSurname = document.createElement('label'),
        surnameInp = document.createElement('input'),
        formFloatingName = document.createElement('div'),
        formFloatingLastname = document.createElement('div'),
        formFloatingSurname = document.createElement('div'),
        addContactBtn = document.createElement('button'),
        addContactBtnSVG = document.createElement('span'),
        saveBtn = document.createElement('button'),
        cancelBtn = document.createElement('button'),
        contactsBlock = document.createElement('div');

  modalTitle.classList.add('modal__title');
  modalClose.classList.add('modal__btn', 'btn-reset');
  form.classList.add('modal__form');
  labelLastname.classList.add('modal__label');
  labelName.classList.add('modal__label');
  labelSurname.classList.add('modal__label');
  lastnameInp.classList.add('modal__input');
  nameInp.classList.add('modal__input');
  surnameInp.classList.add('modal__input');
  requiredLastname.classList.add('modal__span');
  requiredName.classList.add('modal__span');
  addContactBtn.classList.add('modal__add-contact', 'add-contact', 'btn-reset', 'modal__add-contact--active');
  addContactBtnSVG.classList.add('add-contact__svg');
  saveBtn.classList.add('modal__btn-save', 'btn-reset');
  cancelBtn.classList.add('modal__btn-cansel', 'btn-reset');
  contactsBlock.classList.add('modal__contacts');
  formFloatingName.classList.add('form-floating');
  formFloatingSurname.classList.add('form-floating');
  formFloatingLastname.classList.add('form-floating');

  labelName.for = 'floatingName';
  labelSurname.for = 'floatingSurname';
  labelLastname.for = 'floatingLastname';
  nameInp.id = 'floatingName';
  surnameInp.id = 'floatingSurname';
  lastnameInp.id = 'floatingLastname';
  nameInp.type = 'text';
  surnameInp.type = 'text';
  lastnameInp.type = 'text';
  nameInp.placeholder = 'Имя';
  surnameInp.placeholder = 'Отчество';
  lastnameInp.placeholder = 'Фамилия';

  modalTitle.textContent = 'Новый клиент';
  labelName.textContent = 'Имя';
  labelSurname.textContent = 'Отчество';
  labelLastname.textContent = 'Фамилия';
  addContactBtn.textContent = 'Добавить контакт';
  saveBtn.textContent = 'Сохранить';
  cancelBtn.textContent = 'Отмена';
  requiredName.textContent = '*';
  requiredLastname.textContent = '*';
  addContactBtnSVG.innerHTML = svgAddContact;

  labelName.append(requiredName);
  labelLastname.append(requiredLastname);
  formFloatingName.append(nameInp, labelName);
  formFloatingSurname.append (surnameInp, labelSurname);
  formFloatingLastname.append(lastnameInp, labelLastname);
  contactsBlock.append(addContactBtn);
  form.append(
    formFloatingName,
    formFloatingSurname,
    formFloatingLastname,
    contactsBlock,
    saveBtn,
    cancelBtn,
  );
  addContactBtn.append(addContactBtnSVG);

  return {
    form,
    modalClose,
    modalTitle,
    cancelBtn,
    nameInp,
    surnameInp,
    lastnameInp,
    labelName,
    labelSurname,
    labelLastname,
    contactsBlock,
    addContactBtn
  };
}
