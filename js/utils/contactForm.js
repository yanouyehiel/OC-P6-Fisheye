//DOM
const $wrapper = document.getElementById('main-wrapper');
const $contactModal = document.getElementById('contact_modal');


function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

  $wrapper.setAttribute("aria-hidden", "true");
  $contactModal.setAttribute("aria-hidden", "false");

}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  $wrapper.setAttribute("aria-hidden", "false");
  $contactModal.setAttribute("aria-hidden", "true");
}

// fonction affichage nom du photographe dans la modale de contact
// est initialisée dans fonction init de photographer.js
function displayPhotographerName(photographerToDisplay) {

  const photographerName = photographerToDisplay.name;
  const $formTitle = document.querySelector('#form-title');
  $formTitle.insertAdjacentHTML('beforeend', `<br> ${photographerName}`);
};
