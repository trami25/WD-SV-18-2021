let firebaseUrl80="https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";


let button7=document.getElementById("button7");
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

button7.addEventListener("click", function validate(e){
  e.preventDefault();

    if (
        ime7.value == "" ||
        prezime7.value == "" ||
        korisnickoIme7.value == "" ||
        adresa7.value == "" ||
        email7.value == "" ||
        lozinka7.value == "" ||
        brojTelefona7.value == "" ||
        datum7.value == ""
      ) {
        alert("Morate popuniti polja ");
      } else if (!email7.value.match(regexEmail)) {
        alert("Email nije ispravan");
        email7.value = "";
      } else if (!lozinka7.value.match(regexPsw)) {
        alert("Lozinka mora imati najmanje 8 karaktera i brojeve");
        lozinka7.value = "";
      } else if (!brojTelefona7.value.match(regexBroj)) {
        alert("Broj mora imati 9 karaktera ");
        brojTelefonavalue = "";
      } else {
        
        let putRequest=new XMLHttpRequest();
        var korisn={};
            korisn.ime=ime7.value;
            korisn.prezime=prezime7.value;
            korisn.adresa=adresa7.value;
            korisn.telefon=brojTelefona7.value;
            korisn.korisnickoIme=korisnickoIme7.value;
            korisn.lozinka=lozinka7.value;
            korisn.datumRodjenja=datum7.value;
            korisn.email=email7.value;
        
        putRequest.onreadystatechange = function () {
          if (this.readyState == 4) { /* Proveri da li je status 4xx tjs error */
            if (this.status == 200) { /* Proveri da li je status 2xx tjs da li browser dobija request*/
            
            alert("Uspešno ste izvršili izmene!")
            
            window.location.href="administrator.html"
        }else{
          alert("Greska pri unosu u bazu podataka!")
        }

      }

      

      }
      putRequest.open("PUT", firebaseUrl80+ "korisnici/"+ idPr7+'.json');
      
      putRequest.send(JSON.stringify(korisn)); 
    } 
   
    });

function getIdFromUrl() { 
    const path = decodeURI(window.location.toString());
    console.log(path);
    let predstavaId = path.split("?")[1];
    return predstavaId;
  }
  let idPr7=getIdFromUrl();
   /* Ucitaj iz firebasea */
 
  let button79=document.getElementById("button79") 
  button79.addEventListener("click", function v(e){
  e.preventDefault();
  if (confirm("Da li ste sigurni da želite izmenu?!"));{}
  let deleteRequest=new XMLHttpRequest();
    var k={};
    deleteRequest.onreadystatechange = function () {
      if (this.readyState == 4) { /* Proveri da li je status 4xx tjs error */
        if (this.status == 200) { /* Proveri da li je status 2xx tjs da li browser dobija request*/
       alert("OHO")
        
        
        
    }else{
      alert("Greska pri unosu u bazu podataka!");
    }

  }

  

  }
  deleteRequest.open("PUT", firebaseUrl80+ "korisnici/"+ idPr7+'.json');
  
  deleteRequest.send(JSON.stringify(k)); 
  window.location.href="administrator.html";
} 
  );
