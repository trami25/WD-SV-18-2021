let firebase100Url="https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";


let predstave100Request = new XMLHttpRequest();
var name8  = document.getElementById("name8");
var code8 = document.getElementById("code8");
var duration8 = document.getElementById("duration8");
var genre8 = document.getElementById("genre8");
var maxp8 = document.getElementById("maxp8");
var price8 = document.getElementById("price8");
var  grade8= document.getElementById("grade8");
var about8 = document.getElementById("about8");
var sabout8 = document.getElementById("sabout8");
predstave100Request.onreadystatechange = function (){
  if (this.readyState == 4) {
    if (this.status == 200) { 
     
    let predstave=JSON.parse(predstave100Request.responseText);
    for (let i in predstave) {
        let predstava = predstave[i]; 
       
        for (let j in predstava){
            if (j==idPr7){
                console.log(j)
                pr=predstava[j]
            name8.value=pr.naziv;
            code8.value=pr.kod;
            sabout8.value=pr.kratakOpis;
            duration8.value=pr.trajanje;
            genre8.value=pr.zanr;
            about8.value=pr.opis;
            price8.value=pr.cena;
            maxp8.value=pr.maxOsobe;
            break;
        }
   

    }
     } 
  }
 }
}
predstave100Request.open("GET", firebase100Url + "predstave.json");
predstave100Request.send();


let button6=document.getElementById('button');

button6.addEventListener("click", function validate(e){
    e.preventDefault();


      if (
          name8.value == "" ||
          code8.value == "" ||
          duration8.value == "" ||
          genre8.value == "" ||
          maxp8.value == "" ||
          price8.value == "" ||
          about8.value == "" ||
          sabout8.value == "" 
          
        ) {
          alert("Morate popuniti polja ");
        }else {
          
          let putRequest=new XMLHttpRequest();
          var pred={};
              pred.naziv=name8.value;
              pred.kod=code8.value;
              pred.kratakOpis=sabout8.value;
              pred.trajanje=duration8.value;
              pred.zanr=genre8.value;
              pred.opis=about8.value;
              pred.cena=price8.value;
              pred.maxOsobe=maxp8.value;
          
          putRequest.onreadystatechange = function () {
            if (this.readyState == 4) {
              if (this.status == 200) {
              
              alert("Uspešno ste izvršili izmene!")
              
              window.location.href="predstava1.html?"+idPr7
          }else{
            alert("Greska pri unosu u bazu podataka!")
          }
  
        }
}
        putRequest.open("PUT", firebase100Url+ "/predstave/"+ id6 + "/"+idPr7 +'.json');
        
        putRequest.send(JSON.stringify(pred)); 
      } 
     
      });
  
  function getIdFromUrl() { 
      const path = decodeURI(window.location.toString());
      console.log(path);
      let predstavaId = path.split("?")[1];
      return predstavaId;
    }
    let idPr7=getIdFromUrl();

function getID(id){
  let i=new XMLHttpRequest()
  i.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {
     
    let predstave=JSON.parse(i.responseText);
    for (let o in predstave) {
        let predstava = predstave[o]; 
       
        for (let j in predstava){
            if (j==id){
              return o
}
        }
      }
    }
  }
}
}
let id6=getID(idPr7)