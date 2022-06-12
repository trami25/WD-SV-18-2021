let firebase5Url = "https://web4-7c50d-default-rtdb.europe-west1.firebasedatabase.app/";

let podaciUrl = firebase5Url + "predstave.json";

let podaciRequest = new XMLHttpRequest();
podaciRequest.onreadystatechange = function () {
  if (this.readyState == 4) { 
    if (this.status == 200) { 


      console.log(this.responseText); 

      let predstave = JSON.parse(this.responseText);
      

      let target = document.getElementById("pred");
      let target2=document.getElementById("slika");
      let target3=document.getElementById("op");
      

      for (let i in predstave) {
            let predstava = predstave[i]; 
           
            for (let j in predstava){
                if (j==idPredstave1){
                let pr=predstava[j];
                console.log(j);
                let template = `<tr>
               
                <th>Naziv</th>
                <td>${pr.naziv}</td>
                <td rowspan="8"><a href="izmenapredstava.html?${j}"> Izmeni podatke</a></td>
                
            </tr>
            <tr>
                <th>Kod predstave</th>
                <td>${pr.kod}</td>
                <td></td>
        
            </tr>
            <tr>
                <th>Trajanje</th>
                <td>${pr.trajanje} min</td>
                
                <td></td>
            </tr>
            <tr>
                <th>Žanr</th>
                <td>${pr.zanr}</td>
                
                <td></td>
            </tr>
            <tr>
                <th>Cena karte</th>
                <td>${pr.cena} din.</td>
                <td></td>
            
            </tr>
            <tr>
                <th>Max broj osoba</th>
                <td>${pr.maxOsobe}</td>
                
                <td></td>
            </tr>
            <tr>
            <th>Prosečna ocena</th>
            <td>${pr.ocena}</td>
            
            <td></td>
            </tr>
            <th>Dugi opis</th>
            <td columnspan="3">${pr.opis}</td>
            
            <td></td>
        </tr>`;

                target.innerHTML += template;
            
            let template2=` <img src="${pr.slika}" alt="Violinista" width="100%" height="550vh" style="border-radius: 10px;">`
            target2.innerHTML+=template2
            let template3=`${pr.kratakOpis}`
            target3.innerHTML+=template3
        }
    }
        }
      }
    }
};


function getIdFromUrl() { /* Splituj json po id-u */
  const path = decodeURI(window.location.toString());
  console.log(path);
  const pozoristeId = path.split("?")[1];
  return pozoristeId;
}
let idPredstave1=getIdFromUrl(); /* Ucitaj iz firebasea */
podaciRequest.open("GET", firebase5Url + "predstave.json");
podaciRequest.send();

pozor={}