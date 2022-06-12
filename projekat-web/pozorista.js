let firebaseUrl = "https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";

let pozoristaUrl = firebaseUrl + "pozorista.json";

let pozoristaRequest = new XMLHttpRequest();
pozoristaRequest.onreadystatechange = function () {
  if (this.readyState == 4) { /* Proveri da li je status 4xx tjs error */
    if (this.status == 200) { /* Proveri da li je status 2xx tjs da li browser dobija request*/
     
    let pozorista=JSON.parse(pozoristaRequest.responseText)
    console.log(pozorista)
    let target=document.getElementById('images');
    for (let i in pozorista) {
        let pozoriste = pozorista[i];
   

    let template=`<div class="container">
    <a href="pomocni.html?${pozoriste.idPredstava}?${pozoriste.adresa}?${pozoriste.naziv}?${pozoriste.brojPredstava}?${pozoriste.slika}">
    <img src="${pozoriste.slika}" class="image">
    <div class="overlay">
        <div class="text">${pozoriste.naziv}</div>
</div>
</a>
</div>`;
target.innerHTML += template; 
     } 
  }
 }
}
function getIdFromUrl() { /* Splituj json po id-u */
  const path = decodeURI(window.location.toString());
  console.log(path);
  const pozoristeId = path.split("=")[1];
  return pozoristeId;
}
getIdFromUrl(); /* Ucitaj iz firebasea */
pozoristaRequest.open("GET", firebaseUrl + "pozorista.json");
pozoristaRequest.send();