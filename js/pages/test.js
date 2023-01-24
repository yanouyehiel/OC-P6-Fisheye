// // Réponses de Kévin Mentor

// async function getPhotographers() {
//         return fetch('../data/photographers.json') // On retourne les données issus du fetch (pas de données retournés tant que les promesses n'ont pas eu de résultat)
//             .then(res => {
//                 return res.json(); // json() fonctionne via une promise : https://developer.mozilla.org/en-US/docs/Web/API/Response/json
//             })
//             .then(dataJSON => {
//                 return dataJSON; // on retourne le contenu "concret" du fichier JSON, c'est à ce moment que le return de la ligne 3 devient "actif"
//             })
//         /*
//         En français, on pourrait dire :
//         1. va CHERCHER (fetch) le fichier de données JSON (ça prends qlq milliseconde (ms), alors on ATTEND)
//         2. PUIS une fois récupéré (then, ligne 4), on parse les données en JSON (l'opération prends qlq ms donc on ATTEND)
//         3. PUIS une fois le JSON parsé (then, ligne 7) on a la données exploitables dans dataJSON grâce au retour de promesse de .json()
//         4. on RETURN les données finales (L.8) ce qui fait qu'on a fini la chaine de promesse alors on remonte au niveau principal avec le RETURN de la function getPhotographers() à la L.3. C'est ce return qui renvoie les données finales qui seront stockés dans la variable de la L.56
//         */
//     }

//     async function displayData(photographers) {
//         const photographersSection = document.querySelector(".photographer_section");

//         photographers.forEach((photographer) => {
//             const photographerModel = photographerFactory(photographer);
//             const userCardDOM = photographerModel.createPhotographCardDOM();
//             photographersSection.appendChild(userCardDOM);
//         });
//     };

//     // Récupère les datas des photographes
//     async function init() {

//         /*
//         Pourquoi async & await :
//         Il faut admettre que le serveur / logiciel / application ne répondra JAMAIS instantanément,
//         même si les pages répondent en quelques milli-secondes, ça reste un délais.

//         JS est bête et cherche à tout executer sans attendre les données alors que nous on va écrire notre code
//         en se basant sur des données. On dit que JS est ASYNCHRONE :
//         voir schéma : https://www.koyeb.com/static/images/blog/sync-vs-async-schema.png

//         Par exemple:
//         on s'appuie sur l'attribut 'name' du protographer pour l'afficher dans l'UI, mais si on fait :
//         elementDOM.innerHTML = photographer.name
//         alors que 'photographer' n'existe peut-être pas encore (puisque les données ont un délais avant d'être récupéré), alors on va avoir une erreur.

//         JS est "bête" dans le sens où il va pas attendre que les variables contiennent une valeur pour essayer de l'utiliser.
//         Donc ça peut causer des erreurs plus loin, pour palier à ce problème : on utilise async / await))

//         Affiche la page dans le navigateur et regarde la console :
//         */
//         console.log(getPhotographers()) // Va afficher Promise<'pending'>. Car on a mis ASYNC devant la déclaration de la function getPhotographers(). Sans AWAIT, le moteur JS va ATTENDRE (pending) une donnée issu d'un RETURN, en attendant ce RETURN on reste en suspend et donc il n'y aucune donnée concrète qui est exploitable
//         console.log(await getPhotographers())  // Va afficher les données JSON qu'on a récupéré dans le fichier JSON. AWAIT = ATTEND que la function getPhotographers() retourne une données

//         // je te met en PJ du mail je te met un exemple la syntaxe de Destructuration (la syntaxe const { photographers } = XXX)
//         // la doc sur la destructuration : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//         // la syntaxe const { photographers } permet de récupérer l'attribut 'photographers' contenu dans l'objet finale que getPhotographers() retourne
//         const { photographers } = await getPhotographers(); // AWAIT = ATTEND que la function getPhotographers() retourne une données
//         //console.log(photographers)
//         displayData(photographers);
//     };

//     init();


//     /////////////////////////////////////////////////////////////////////////////////////////////
//     /////////////////////////////////////////////////////////////////////:
//     ///////////////////////////////////////////////////////////////

// //Mes questions
// async function getPhotographers() {   // tjs mettre requête fetch dans une fonction?
//   return fetch('../data/photographers.json')  // pourquoi return?
//       .then(res => {
//           return res.json();
//       })
//       .then(dataJSON => {  //pourquoi cette écriture dataJSON?
//           return dataJSON;
//       })
// }

// // FONCTION ASYNCHRONE POUR AFFICHER DONNEES
// async function displayData(photographers) { //a quoi correspond photographers?

//    // je cible la div qui a pour classe .photographer section dans index.html
//     const photographersSection = document.querySelector(".photographer_section");

//     // je parcours le tableau photographers avec la boucle forEach
//     photographers.forEach((photographer) => { //pq parenthèses en plus (callback?)? y a quoi comme données dans UN photographer?

//         //
//         const photographerModel = photographerFactory(photographer);  // c'est quoi cet argument? pas de import? quand on place une fonction dans une variable, que retourne la variable?
//         //
//         const photographCardDOM = photographerModel.createPhotographCardDOM(); //
//         // console.log(userCardDOM);
//         // rajoute
//         photographersSection.appendChild(photographCardDOM); // appendChild sans créer d'élément?
//     });
// };

// // EXECUTE LES FONCTIONS PRECEDENTS
// async function init() {

//     //récupère les datas photographes avec la fonction async
//     // et place les dans la constante photographers
//     const { photographers } = await getPhotographers(); // pq le mot clé await ici et pas sur fonction display data et init?

//     //console.log(photographers)
//     //exécute fonction d'affichahe en utilisant la constante précédent photogrpahers
//     displayData(photographers);
// };

// init();


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Mes explications


// //méthode pour récupérer données contenues dans fichier JSON
// // méthode asynchrone car on ne sait pas combien de temps va prendre la réponse pour nous parvenir
// // async function getPhotographers() {
// //   return fetch('../data/photographers.json')  // emplacement du JSON entre () - va chercher les données et renvoie une promesse
// //       .then(res => {          // ensuite attend la réponse - res = nom donné à l'objet retourné
// //           return res.json();  // méthode .json() pour convertir les données en JSON
// //       .then(dataJSON => {  //ensuite attend la promesse de conversion - dataJSON est un nom arbitraire qui indique que c'est un JSON
// //           return dataJSON;
// //       })
// // }

// // FONCTION ASYNCHRONE POUR AFFICHER DONNEES
// async function displayData(photographers) { //a quoi correspond photographers?

//    // je cible la div qui a pour classe .photographer section dans index.html
//     const photographersSection = document.querySelector(".photographer_section");

//     // je parcours le tableau photographers avec la boucle forEach
//     photographers.forEach((photographer) => { //pq parenthèses en plus (callback?)? y a quoi comme données dans UN photographer?

//         //
//         const photographerModel = photographerFactory(photographer);  // c'est quoi cet argument? pas de import? quand on place une fonction dans une variable, que retourne la variable?
//         //
//         const photographCardDOM = photographerModel.createPhotographCardDOM(); //
//         // console.log(userCardDOM);
//         // rajoute
//         photographersSection.appendChild(photographCardDOM); // appendChild sans créer d'élément?
//     });
// };

// // EXECUTE LES FONCTIONS PRECEDENTS
// async function init() {

//     //récupère les datas photographes avec la fonction async
//     // et place les dans la constante photographers
//     const { photographers } = await getPhotographers(); // pq le mot clé await ici et pas sur fonction display data et init?

//     //console.log(photographers)
//     //exécute fonction d'affichahe en utilisant la constante précédent photogrpahers
//     displayData(photographers);
// };

// init();


// function Fruit(n) {
//   this.name = n;
// }


// let pomme = new Fruit ("Pomme");

// console.log(Fruit.prototype);
// console.log(pomme);
// //console.log(testDeFonction);
