/*Risultato Api con thunder client:
array di 6 oggetti ognuno ha 5 proprità
Avrò bisogno della proprietà "title", che mi fornirà il testo da inserire nelle card, e del "url" che mi fornirà l'immagine.
[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  }
]*/

//dati:
const photoContainer = document.getElementById('photo-container');
const overlayContainer = document.getElementById('overlay-container');

//Chiamata AJAX all'Api:
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(res => {
    const objectsArray = res.data;
    objectsArray.forEach(elementi => {
      const { title, url } = elementi;
      stampoCard(title, url);
    });

    const cardImage = document.querySelectorAll('.immagine');

    // Itero usando forEach
    cardImage.forEach(image => {
      // Assegno l'evento 'click' a ogni immagine
      image.addEventListener('click', (event) => {
        // Faccio apparire l'overlay
        overlayContainer.classList.remove('display-none');
        // Stampo in pagina l'elemento che conterrà l'immagine e il bottone
        overlayContainer.innerHTML = `
         <div class="overlay-box">
            <button id="bottone-chiudi" class="bottone">Chiudi</button>
            <img src="${event.target.src}" alt="">
         </div>
         `;
        // Salvo il bottone a cui assegnerò la funzione di chiusura dell'overlay
        const bottoneChiudi = document.getElementById('bottone-chiudi');
        // Assegno al bottone 'chiudi' la funzione
        bottoneChiudi.addEventListener('click', () => {
          overlayContainer.classList.add('display-none');
        });
      });
    });
  });

//funzione che stampa card:
function stampoCard(title, url) {
  photoContainer.innerHTML += `
      <div class="col">
         <div class="photo-card">
            <div class="pin">
               <img src="img/pin.svg" alt="">
            </div>
            <div class="card-image">
               <img class="immagine" src="${url}" alt="">
            </div>
            <div class="text-image">
               <p>${title}</p>
            </div>
         </div>
      </div>
   `
}