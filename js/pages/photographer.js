
////////////////////////  PHOTOGRAPHER HEADER  ///////////////////////////////////////

// Récupérer toutes les données JSON
async function getAllDatas() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
      })
};


//récupération de l'Id dans l'url du photographe cliqué
const urlParams = new URLSearchParams(window.location.search);
const id_param = urlParams.get('id');
const id_paramNumb = parseInt(id_param);

// Section photographer-header sur page photographer.html
const $header = document.querySelector('.photographer-header');
console.log(id_paramNumb);
// trouve le photographe courant parmi tous les photographes
async function getOnePhotographer() {
 const { photographers } = await getAllDatas();
 let currentPhotographer = photographers.find(element => element.id == id_paramNumb);
 return currentPhotographer;
};


// afficher infos du photographe courant dans le photographer-header
async function displayPhotographerHeader(currentPhotographer) {
  const actualPhotographer = await currentPhotographer;

  const photographerHeaderInfos = `
    <div class="photographer-header-infos">
      <h1 class="photographer-header-name">${actualPhotographer.name}</h1>
      <p class="photographer-location">${actualPhotographer.city}, ${actualPhotographer.country}</p>
      <p>${actualPhotographer.tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <div>
      <img class="photographer__avatar" src="/assets/photographers/${actualPhotographer.portrait}" alt="avatar du photographe ${actualPhotographer.name}">
    </div>
  `;
  $header.innerHTML = photographerHeaderInfos;
  return $header
};





////////////////////////  SECCTION MEDIAS  ///////////////////////////////////////

// cible la section médias
const $mediaSection = document.querySelector('.photographer-media');

// Afficher les médias : img, nom, likes
async function displayMedias() {

  const { media } = await getAllDatas(); // renvoie un array des médias tous photographes confondus

  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb); //renvoie un array des médias du photographe en cours

  let DOM = "";

  mediasToDisplay.forEach(media => {
    const mediaModel = mediaFactory(media);
    DOM += mediaModel.sortMedias().createHTMLCard();
  });

    $mediaSection.innerHTML = DOM;
};


async function showModal() {
  
  let modalContent = document.querySelector('#lightbox__container');
  
  let container = document.querySelector('#lightbox__container .lightbox');
  
  modalContent.classList.add("active")
  console.log('Cliqué !')

  //Chargement des images dans la boite modal
  const { media } = await getAllDatas();

  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb);
  
  const nbImg = mediasToDisplay.length
  
  container.style.width = (500 * nbImg) + "px";
  //console.log(nbImg)

    for (let i = 0; i < nbImg; i++) {
      if (mediasToDisplay[i].image) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('assets/images/" + mediasToDisplay[i].photographerId + "/" + mediasToDisplay[i].image + "')"
      }
      else {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('assets/images/" + mediasToDisplay[i].photographerId + "/" + mediasToDisplay[i].video + "')"
      }
      container.appendChild(div)
      //modalContent.appendChild(container)
      
    }
    console.log(modalContent)
    let p = 0;
    let btnGauche = document.querySelector('.lightbox-prev')
    let btnDroit = document.querySelector('.lightbox-next')
    
    afficherMasquer();

    btnGauche.onclick = function(){
      if (p > -nbImg+1)
        p--;
      container.style.transform = "translate("+p*500+"px)";
      container.style.transition = "all 0.5s ease";
      afficherMasquer();
    }
    btnDroit.onclick = function(){
      if (p < 0)
        p++;
      container.style.transform = "translate("+p*500+"px)";
      container.style.transition = "all 0.5s ease";
      afficherMasquer();
    }

  function afficherMasquer(){
    if (p == (-nbImg + 1))
      btnGauche.style.visibility = "hidden";
    else
      btnGauche.style.visibility = "visible";
    if (p == 0)
      btnDroit.style.visibility = "hidden";
    else
      btnDroit.style.visibility = "visible";
  }
}


function closeModalLightbox() {
  let modalContent = document.querySelector('#lightbox__container');
  modalContent.classList.remove("active")
  console.log('Fermé !')
}

// fonction d'exécution
 async function init() {

  const photographerToDisplay = await getOnePhotographer();
  displayPhotographerHeader(photographerToDisplay);
  displayPhotographerName(photographerToDisplay);
  displayMedias();
 };


init();
