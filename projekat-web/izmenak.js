let firebase7Url="https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";

let users7Url = firebase7Url + "korisnici.json";
let korisnici7Request = new XMLHttpRequest();
var ime7 = document.getElementById("name7");
var prezime7 = document.getElementById("surname7");
var korisnickoIme7 = document.getElementById("username7");
var adresa7 = document.getElementById("address7");
var email7 = document.getElementById("email7");
var lozinka7 = document.getElementById("password7");
var brojTelefona7 = document.getElementById("phone7");
var datum7 = document.getElementById("date7"); 
var regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var regexPsw = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
var regexBroj = /[0-9]{9}/;
korisnici7Request.onreadystatechange = function () {
  if (this.readyState == 4) { /* Proveri da li je status 4xx tjs error */
    if (this.status == 200) { /* Proveri da li je status 2xx tjs da li browser dobija request*/
     
    let korisnici=JSON.parse(korisnici7Request.responseText)
    console.log(korisnici)
    for (let i in korisnici) {
        let korisnik=korisnici[i]
        if (i==idPr77){

            ime7.value=korisnik.ime
            prezime7.value=korisnik.prezime
            adresa7.value=korisnik.adresa
            datum7.value=korisnik.datumRodjenja
            email7.value=korisnik.email
            lozinka7.value=korisnik.lozinka
            brojTelefona7.value=korisnik.telefon
            korisnickoIme7.value=korisnik.korisnickoIme
            break;
        }
   

     
     } 
  }
 }
}
korisnici7Request.open("GET", firebase7Url + "korisnici.json");
korisnici7Request.send();



function getIdFromUrl() { 
    const path = decodeURI(window.location.toString());
    console.log(path);
    let predstavaId = path.split("?")[1];
    return predstavaId;
  }
  let idPr77=getIdFromUrl();
   /* Ucitaj iz firebasea */
