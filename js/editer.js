window.addEventListener("load", function(e){

    //les boutons submit
    var btn = document.getElementById("btn");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");

    //au click du submit
    btn.addEventListener("click", function(){
        //valeurs des inputs
        var titrePresentation = document.getElementById('titrePresentation').value;
        var contenuPresentation = document.getElementById('contenuPresentation').value;

        //on crée un objet js
        var presentation = {
            "titre": titrePresentation,
            "contenu": contenuPresentation
        };

        //convertit l'objet en chaine json, on serialize
        var json = JSON.stringify(presentation);
        
        //enregistrer dans le local storage l'objet serialisé
        //session de stockage sans delai expiration
        localStorage.setItem("datas", json );
    });

    btn2.addEventListener("click", function(){
        var titreFormation = document.getElementById('titreFormation').value;
        var formation1 = document.getElementById('dateFormation1').value;
        var formation2 = document.getElementById('dateFormation2').value;
        var formation3 = document.getElementById('dateFormation3').value;

        var name1 = document.getElementById('nomFormation1').value;
        var name2 = document.getElementById('nomFormation2').value;
        var name3 = document.getElementById('nomFormation3').value;
        console.log(name3);

        var dateForm = {"titreFormation": titreFormation, "formation1": formation1 ,"formation2": formation2,"formation3": formation3};
        var nameForm = {"name1": name1 ,"name2": name2,"name3": name3};

        var json2 = JSON.stringify(dateForm);
        var json3 = JSON.stringify(nameForm);
        localStorage.setItem("datas2", json2 );
        localStorage.setItem("datas3", json3 );
    });

    btn3.addEventListener("click", function(){
        var hobby1 = document.getElementById('hob1').value;
        var hobby2 = document.getElementById('hob2').value;
        var hobby3 = document.getElementById('hob3').value;
        var hobby4 = document.getElementById('hob4').value;
        var hobby5 = document.getElementById('hob5').value;
        var hobbies = {"hobby1": hobby1 ,"hobby2": hobby2,"hobby3": hobby3, "hobby4": hobby4, "hobby5":hobby5};

        var json4 = JSON.stringify(hobbies);
        localStorage.setItem("datas4", json4 );
    });   
});
