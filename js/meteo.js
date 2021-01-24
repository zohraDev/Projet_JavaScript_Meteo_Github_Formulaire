window.addEventListener("load", function(e){

    //on cible tous les elements pour l'affichage
    const desc = document.getElementById("desc");
    const temp = document.getElementById("temp");
    const search = document.getElementById("search");
    const country = document.querySelector(".country");
    const icon = document.querySelector(".weather-icon");
    const city = document.getElementById("ville");
    const date = document.querySelector(".date");
    

    //obtenir la valeur de la ville recherchée
    search.addEventListener("keypress", function(e){
        const location = search.value;

    //si on appuie sur entrée on appelle la fonction getCity
    if (e.key == "Enter"){
        if(location === "") {
            //alert si la search bar est vide
            alert("enter a city");
        }else{

                    //fonction getCity : on insère la valeur de search dans l'API open weather
                    // et on appelle la fonction getData 
                    
                    const key = "41a33c1f6739002732956da85ecbd727";
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;
                    
                    //le json est visible à l'adresse consol-loguée
                    console.log(url);
                    

                         //on recupere les datas 
                        fetch (url).then(response => response.json())
                        .then(data => {
                            //on affecte les données désirées aux variables

                            const temperature = Math.floor(data.main.temp);
                            const descrip = data.weather[0].description;
                            const ville = data.name;
                            const pays = data.sys.country;
                            const image = data.weather[0].icon; 
                            
                        //affichage des datas
                        city.innerHTML = ville;
                        country.innerHTML = pays;
                        desc.innerHTML = descrip;
                        temp.innerHTML = `Current Temp:${temperature}&degC`;
                        icon.innerHTML = `<img src="https://raw.githubusercontent.com//steeven7/Weather_App/master/assets/${image}.png">`;
                        search.value = "";
                             })
                        //erreur si ville inexistante
                         .catch( () => {
                            alert("Ville non trouvée"); });
                    }
                    
                } 
    });   
});