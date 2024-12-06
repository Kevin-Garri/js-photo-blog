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

//dati
const photoCard = document.getElementById('photo-card');

//1.chiamata con axios
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(res => {
    const ArrayOggetti = res.data;//proprietà che continene l'array di oggetti
    //2.ciclo array, destrutturo l'oggetto e prendo title e url, ad ogni ciclo stampo in pagina
    ArrayOggetti.forEach(elementi => {
      const { title, url } = elementi;
      stampoCard(title, url)
    });
  });

//3.stampo in pagina le card
function stampoCard(title, url) {
  photoCard.innerHTML += `
        <div class="col">
         <div class="pin-png">
            <img src="img/pin.svg" alt="">
         </div>
         <div class="card">
            <div class="photo-img">
               <img src="${url}" alt="">
            </div>
            <div class="photo-text">
               <p>${title}</p>
            </div>
         </div>
      </div>
   `
}
