

/* div qui contient toutes les questions*/
var container = document.querySelector("#quiz")
 
var divQuestion  = container.querySelectorAll("div");


//à la validation du formulaire 
document.querySelector('#monQuiz').addEventListener('submit',function(e){

//preventDefault annule le comporttament pas défaut de du formulaire
//qui est de rafraichir la page automatiquement une fois le formulaire envoyé 
         e.preventDefault();

         // variable qui contient le nombre de bonnes réponse 
         let score=0 

          // on parcours toutes les questions
         for (let i = 0; i < divQuestion.length; i++){

            //on boucle toutes les réponses
            let inputRadio = document.getElementById('reponse-'+i)  
          
            //On vérifie si les bonnes réponses sont choisies par l'utilisateur
            if (inputRadio.checked){ 
                //et on augmente les points
                score ++
                // et on change la class des div question
                divQuestion[i].className= "bonneReponse" 
              } else {
                divQuestion[i].className= "mauvaiseReponse"
              } }
              
              //Afficher le score à l'utilisateur
              if (score >= 4)  {
                document.querySelector('h1').textContent ='Votre score est : ' +score+'/5. Bravo  👏  🥳 🎉'
              }else {
                document.querySelector('h1').textContent ='Votre score est : ' +score+'/5. Null 🤪 😩 😬 '
              }
            })

            //bouton recommencer
            document.querySelector('#recommencer').addEventListener('click', ()=>{
                // on recharge la page
                window.location.reload(); 
            })

            