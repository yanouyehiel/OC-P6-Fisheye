
// fonction asynchrone pour récupérer toutes les données du fichier photographers.json
 async function getPhotographers() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
      })
}

// fonction asynchrone pour afficher les données phtographes sur la page accueil index.html
async function displayData(photographers) {
    const $photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        //console.log(photographerModel);
        const photographerCardDOM = photographerModel.createPhotographerCardDOM();
        //console.log(photographerCardDOM);
        $photographersSection.appendChild(photographerCardDOM);
    });
};

// fonction asynchrone pour exécuter les deux précédentes fonctions
async function init() {
    //récupère uniquement le tableau photographers de l'objet json dans variable photographers
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
