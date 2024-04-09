import { createHeader } from "./create-header.js";
import { createClientsSection } from "./create-table.js";
import { createClientsForm } from "./client-form.js";

function createApp() {
  const header = createHeader();
  const clientsSection = createClientsSection();
  document.body.append(header, clientsSection.main);
}



function addClientModal() {
  const createForm = createClientsForm();
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');

  modal.classList.add('modal', 'site-modal', 'modal-active');
  modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active');
  createForm.form.classList.add('add-client');

  modal.append(modalContent);
  modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);

  return modal;
}

createApp();
