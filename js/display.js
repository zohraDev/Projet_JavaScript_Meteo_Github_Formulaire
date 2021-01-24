window.addEventListener("load", function(e){

//on recupere les données du local storage
var textPresentation = localStorage.getItem("datas");
var dateFormations = localStorage.getItem("datas2");
var nomFormations = localStorage.getItem("datas3");
var hobbyz = localStorage.getItem("datas4");

//on "déserialise" l'objet JS, on les remet sous forme objet
var restitue = JSON.parse(textPresentation);
var restitue2 = JSON.parse(dateFormations);
var restitue3 = JSON.parse(nomFormations);
var restitue4 = JSON.parse(hobbyz);

//change les elements Mon CV
document.getElementById("tPresentation").textContent = restitue.titre;
document.getElementById("cPresentation").textContent = restitue.contenu;

// //change les elements date formation
document.getElementById("titleMain").textContent = restitue2.titreFormation;
document.getElementById("dateForm1").textContent = restitue2.formation1;
document.getElementById("dateForm2").textContent = restitue2.formation2;
document.getElementById("dateForm3").textContent = restitue2.formation3;

// //change les elements nom formation
document.getElementById("nameForm1").textContent = restitue3.name1;
document.getElementById("nameForm2").textContent = restitue3.name2;
document.getElementById("nameForm3").textContent = restitue3.name3;

// //change les hobbies
document.getElementById("hobbies1").textContent = restitue4.hobby1;
document.getElementById("hobbies2").textContent = restitue4.hobby2;
document.getElementById("hobbies3").textContent = restitue4.hobby3;
document.getElementById("hobbies4").textContent = restitue4.hobby4;
document.getElementById("hobbies5").textContent = restitue4.hobby5;
});

