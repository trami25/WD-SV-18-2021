let firebase6Url="https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";

let users6Url = firebase6Url + "korisnici.json";
let korisnici6Request = new XMLHttpRequest();
korisnici6Request.onreadystatechange = function () {
  if (this.readyState == 4) { /* Proveri da li je status 4xx tjs error */
    if (this.status == 200) { /* Proveri da li je status 2xx tjs da li browser dobija request*/
     
    let korisnici6=JSON.parse(korisnici6Request.responseText);
    let target6=document.getElementById('korisnici');
    for (let k in korisnici6) {
      console.log(k)
        let korisnik6=korisnici6[k];
        let template6=
        `<tr><td><img src="./slike/user.jpg" alt="slika" class="pic"></td>
        <td>${korisnik6.ime} ${korisnik6.prezime}</td>
        <td>${korisnik6.korisnickoIme}  ${korisnik6.lozinka}</td>
        <td><a href="izmenakorisnika.html?${k}">Izmeni</a></td>`
        
    target6.innerHTML += template6; 
     } 
  }
 }
}

korisnici6Request.open("GET", firebase6Url + "korisnici.json");
korisnici6Request.send();