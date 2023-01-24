// Design pattern factory for photographers

function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function createPhotographerCardDOM() {

      const article = document.createElement( 'article' );
      article.classList.add('photographer-card') // je crée un article avec les infos photographes

      const link = document.createElement('a');  //je crée un lien
      link.setAttribute("href", `photographer.html?id=${id}` );
      link.classList.add("photographerPage__link");  // j'ajoute la classe "photographerPage__link"

      const img = document.createElement('img'); //je crée l'avatar
      img.classList.add('photographer__avatar');
      img.setAttribute("src", picture);
      img.setAttribute("alt", ` `);
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Accéder à la page de ${name}`);

      const photographerName = document.createElement( 'h2' ); //je crée le nom/prénom
      photographerName.classList.add('photographer-name');
      photographerName.innerHTML = name;

      const location = document.createElement('p'); //je crée une balise pour la ville
      location.classList.add('photographer-location');
      location.innerHTML = `${city}, ${country}`;

      const quote = document.createElement( 'p' ); //je crée une balise pour la citation
      quote.innerHTML = tagline;

      const pricePerDay = document.createElement('p');  //je crée un emplacement pour le tarif
      pricePerDay.classList.add('pricePerDay');
      pricePerDay.innerHTML = `${price}€/jour`;

      link.appendChild(img); //j'insère mes éléments créés dans leur emplacement
      link.appendChild(photographerName);

      article.appendChild(link);
      article.appendChild(location);
      article.appendChild(quote);
      article.appendChild(pricePerDay);

      return (article);
    }

    function getPhotographerPrice() {
      const $photographerPrice = document.getElementById('photographer-likes-price');

      $photographerPrice.innerHTML = `
        <p class="photographer-likes">${totalLikes}
          <i class="fas fa-heart"></i>
        </p>
        <p class="photographer-price">${price}€/jour</p>
      `
       return $photographerPrice
    }
    return { getPhotographerPrice, createPhotographerCardDOM }
};
