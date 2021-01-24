window.addEventListener("load", function(e){

// Lecteur de musique 

lecteurDeMP3();
// Création des variables
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
function lecteurDeMP3(){
    //On crée un objet Audio
    var audio = new Audio();
    //on va chercher une musique
    audio.src = 'assets/musique/abc.mp3';
    //on affiche le lecteur
    audio.controls = true;
    // créer un boucle de lecture
    audio.loop = true;
    //demarrage au chargement de la page
    audio.autoplay = false;


 

    var btn_teuf = document.getElementById('btn_teuf');

    btn_teuf.addEventListener('click', function(e){
        var text = document.getElementById('textBtn');
        if(text.textContent = "Mode travail" ){ 
            audio.play();
        }
       
        });
        

        document.getElementById('audio_box').appendChild(audio);
        context = new webkitAudioContext(); // AudioContext -> crée et retourne un nouvel objet AudioContext, interfeace du lecteur
        analyser = context.createAnalyser(); // AnalyserNode / Analyse les données de temps et de frequence pour la visualisation des barres de son 
        canvas = document.getElementById('analyser_render');
        ctx = canvas.getContext('2d'); // Retourne un contexte de dessin ou null si pas de musique 
        source = context.createMediaElementSource(audio); // Permet de jouer et manipuler l'audio 
        source.connect(analyser);
        analyser.connect(context.destination);
        bouclerAnimationAudio();
    } 

// bouclerAnimationAudio() anime tous les styles de graphiques à la fréquence audio
// Loop valeur par defaut de 60 images secondes - en focntion de l'ordi et du navigateur 
function bouclerAnimationAudio(){
    window.requestAnimationFrame(bouclerAnimationAudio);
    //crée un objet qui analyse chaque fréquence, 60 fois par secondes
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    //analyses les données de fbc array et les enregistre
    analyser.getByteFrequencyData(fbc_array);

    // supprime le contenu précédemment affiché dans le rectangle 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.fillStyle = '#00CCFF'; // Couleur des barres de musique 
    bars = 100; // longueur de la barre de temps de la musique 

        for (var i = 0; i < bars; i++) {
            bar_x = i * 3;
            bar_width = 2;
            bar_height = -(fbc_array[i] / 2);
            ctx.fillRect(bar_x, canvas.height, bar_width, bar_height); //Dessine un rectangle plein aux coordonnées x, y ( largeur/hauteur) 
        }
}
});

