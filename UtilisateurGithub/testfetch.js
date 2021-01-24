//fichier test
var nombreFollowrs
var nombreSuivi
var nombreRepos
var loginUtilisateur
var photoUtilisateur

    document.getElementById("monFromulaire").addEventListener('submit', function(e){

        e.preventDefault();
        // valeur de l'input de recherche
        let nomUtilisateur = document.querySelector('#chercherUtilisateur').value;

        //on split puis on join pour eviter les espaces : on cherche un seul nom utilisateur
        nomUtilisateur = nomUtilisateur.split(' ').join('');
        console.log(nomUtilisateur);
       
        //on envoi une requete du nom utilisateur à l'api Github
        await fetch ('https://api.github.com/users/'+ nomUtilisateur)

        
         .then(function(response){
            if(response.ok){
               response.json() .then(()=>{

                    //console.log(reponse)
                    document.querySelector('#photo-profil').innerHTML = '<figure class="fig"> <img src="'+ reponse.avatar_url + ' " alt="photo profil" class="photo"> <p class="figcaption">'+ reponse.login +'</p></figure>';
                    
                    let divInformation =document.getElementById('informations')
                    //on place les données : followers, repos, following dans la div 'informations'
                    divInformation.innerHTML = '<p class="follow"> <hr>Followrs :  '+reponse.followers+' <br>Repos : '+reponse.public_repos+' <br>Following : '+reponse.following+'<br><br></p>';
                    //on affiche la div a la validation du bouton
                    divInformation.style.display ='block';

                        })
                    }else{
                        //affichage erreur
                        document.querySelector('#photo-profil').innerHTML='<p>Erreur</p>'  
                }

            } )
        })
    
        