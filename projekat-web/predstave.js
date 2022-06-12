let firebase4Url = "https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";

let predstaveUrl = firebase4Url + "pozorista.json";

let pozoristaRequest = new XMLHttpRequest();
pozoristaRequest.onreadystatechange = function () {
  if (this.readyState == 4) { 
    if (this.status == 200) { 


      console.log(this.responseText); 

      let predstave = JSON.parse(this.responseText);
      console.log(predstave);

      let target = document.getElementById("pre1");
      let target7=document.getElementById("main4");
      let template7=`
      <img src="${sPr}" alt="${aPr}" class="img">
      <br><hr>
          <h2 class="snp">${aPr}</h2>
          <br><hr>
          <p>Adresa:<br> ${nPr}</p>
          <br><hr>
          <p>Broj predstava:<br>${bPr}</p>
          <br><hr>`;

          target7.innerHTML+=template7;

      for (let i in predstave) {
        if (i==prId){
            let predstava = predstave[i]; 
            console.log(predstava);
            for (let j in predstava){
                let pr=predstava[j];
                console.log(pr);
                let template = ` 
            
        <div class="container">
            <img src="${pr.slika}" class="image">
            <div class="overlay">
                <div class="text"><b>${pr.naziv}</b> <br>
                <a href="predstave.html?${j}">Opširnije</a></div>
            </div>
        </div>`;

                target.innerHTML += template;

             
        }
        }
      }
    }
  }
};

function getIdFromUrl() { 
  const path = decodeURI(window.location.toString());
  console.log(path);
  let predstavaId = path.split("?")[1];
  let nazivPr = path.split("?")[2];
  let adresa = path.split("?")[3];
  let brojPredstava = path.split("?")[4];
  let slikaPr= path.split("?")[5];
  let a=[predstavaId,nazivPr,adresa,brojPredstava,slikaPr]
  return a;
}
let a=getIdFromUrl();
let prId=a[0]
let nPr=a[1]
let aPr=a[2]
let bPr=a[3]
let sPr=a[4]
 /* Ucitaj iz firebasea */
pozoristaRequest.open("GET", firebase4Url + "predstave.json");
pozoristaRequest.send();