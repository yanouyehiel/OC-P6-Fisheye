const fs = require('fs');

//fonction media factory pour créer les médias

function mediaFactory(media) {
  const { image } = media;
  //console.log({image});

  function sortMedias() {
    if (image) return templateImage(media);
      else return templateVideo(media);
  }

  return { sortMedias }
};

// fonction card DOM image
function templateImage(media) {
  function createHTMLCard() {
    return `
    <div class="media__item">
      
        <img class="media__item-image" onclick="showModal()" width="350px" height="300px" src="/assets/images/${media.photographerId}/${media.image}">
      
      <div class="media-item__footer">
        <p class="title-medias">${media.title}</p>
        <span id="nbLikes">${media.likes}</span>
        <button id="btnLikes">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
  }
  
  return { createHTMLCard }
};

// fonction card DOM video
function templateVideo(media) {
  function createHTMLCard() {
    return `
    <div class="media__item">
     
        <video class="media__item-video" onclick="showModal()" width="350px" height="300px" src="/assets/images/${media.photographerId}/${media.video}"></video>
      
      <div class="media-item__footer">
        <p class="title-medias" >${media.title}</p>
        <span id="nbLikes">${media.likes}</span>
        <button id="btnLikes">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
  }
  
  return { createHTMLCard }
}


/*let mediaContent = document.querySelector('.media__item');
mediaContent.addEventListener('click', displayLightbox(media.photographerId, e));*/

/////////////////////////////////////////////////:
//////////////////////////TOTAL LIKES//////////////////
//////////////////////////////////////////:











let numberOfLikes = 0;

 function countOfLikes() {
   numberOfLikes++;
   const $mediaSection = document.querySelector('.photographer-media');
   $mediaSection.addEventListener('click', function (e) {
     if (e.target.querySelector('#btnLikes') !== null) {
       console.log('OK')
     }
   })
   document.getElementById("nbLikes").textContent = numberOfLikes;
   fs.writeFileSync('../../data/photographers.json', media);
 }

 /*const $mediaSec = document.querySelector('.photographer-media');

 console.log($mediaSec)

   $mediaSec.addEventListener('click', function (e) {
     if ($mediaSec.querySelector('#btnLikes') !== null) {
       console.log('OK');
     }
  })*/
let boutonLikes = document.getElementById("btnLikes")
console.log(boutonLikes);
addEventListener("click", countOfLikes);


 /*container.addEventListener('click', function (e) {
     // But only alert for elements that have an alert-button class
     if (e.target.classList.contains('alert-button')) {
       alert(e.target.innerHTML);
     }
   });*/
