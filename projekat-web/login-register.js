let firebase77Url = "https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";

let korisnci77Url = firebase77Url + "korisnici.json";

let form = document.getElementById("login"); // forma login
let button1=document.getElementById("button")
button1.addEventListener("click", function(e){
e.preventDefault();
  let username1 = document.getElementById("ename").value.trim(); // korisnik id
  let password1 = document.getElementById("password").value.trim(); // lozinka id

  if (username1 == "" || password1 == "") {
    alert("Polja ne smeju biti prazna");
  } else {
    let korisnici77Request = new XMLHttpRequest();
    korisnici77Request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          console.log(this.responseText);
          let users=JSON.parse(korisnici77Request.responseText);
          let login = false;
          for (let i in users) {
            let user = users[i];
            let username3 = user.korisnickoIme; 
            let password3 = user.lozinka;
            console.log(username3, password3);
            console.log(username1, password1);
            if (username3 == username1 && password1 == password3) {
              login = true;
              alert("Uspesno ste se ulogovali! Dobrodosli!");
            meni=document.getElementById("nav")
           
            template= `<a href="index.html">Početna</a>
            <a href="korisnik.html">Korisnik</a>
            <a href="index.html">Odajva</a>`
            ;

            meni.innerHTML=template;
              break;
            } 
            else {
              alert("Pogresan unos podataka");
            }
          }
        }
        else{
            alert("Problem sa unosom u bazu podataka")
        }
      }
    }
    korisnici77Request.open("GET", firebase77Url + "korisnici.json");
    korisnici77Request.send();
  }
})

var button = document.getElementById("button1");

var ime = document.getElementById("name");
var prezime = document.getElementById("surname");
var korisnickoIme = document.getElementById("ename1");
var adresa = document.getElementById("address");
var email = document.getElementById("email");
var regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var lozinka = document.getElementById("password1");
var regexPsw = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
var brojTelefona = document.getElementById("phone");
var regexBroj = /[0-9]{9}/;
var datum = document.getElementById("date");
button.addEventListener("click", function validate() {
  if (
    ime.value == "" ||
    prezime.value == "" ||
    korisnickoIme.value == "" ||
    adresa.value == "" ||
    email.value == "" ||
    lozinka.value == "" ||
    brojTelefona.value == "" ||
    datum.value == ""
  ) {
    alert("Morate popuniti polja ");
  } else if (!email.value.match(regexEmail)) {
    alert("Email nije ispravan");
    email.value = "";
  } else if (!lozinka.value.match(regexPsw)) {
    alert("Lozinka mora imati najmanje 8 karaktera i brojeve");
    lozinka.value = "";
  } else if (!brojTelefona.value.match(regexBroj)) {
    alert("Broj mora imati 9 karaktera ");
    brojTelefona.value = "";
  } else {
    alert("Registrovali ste se");
  }
})

function getIdFromUrl() { /* Splituj json po id-u */
  const path = decodeURI(window.location.toString());
  console.log(path);
  const ime = path.split("?")[1];
  return ime;
}
let regKor=getIdFromUrl();



