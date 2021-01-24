var nombreFollowrs
var nombreSuivi
var nombreRepos
var loginUtilisateur
var photoUtilisateur


    async function getUser(nomUtilisateur){
        //on envoi une requete du nom utilisateur à l'api Github
        var reponse = await fetch ('https://api.github.com/users/'+nomUtilisateur)
        console.log(reponse)
      
        return reponse
    }

        document.getElementById("monFromulaire").addEventListener('submit', function(e){

                e.preventDefault();
                // valeur de l'input de recherche
                let nomUtilisateur = document.querySelector('#chercherUtilisateur').value;
                //on split puis on join pour eviter les espaces : on cherche un seul nom utilisateur
                nomUtilisateur =nomUtilisateur.split(' ').join('');
    
                //réponse requete json
                getUser(nomUtilisateur)
                    .then(function(reponse){
                        return reponse.json()
                    })      
                    .then(function(reponse){
                        //on ajoute la donnée à la div photo et la donnée on la met dans une figure(photo +nom utilisateur)
                        document.querySelector('#photo-profil').innerHTML = '<figure class="fig"> <img src="'+ reponse.avatar_url + ' " alt="photo profil" class="photo"> <p class="figcaption">'+ reponse.login +'</p></figure>';
                        
                        let divInformation = document.getElementById('informations');
                        //on place les données : followers, repos, following dans la div 'informations'
                        divInformation.innerHTML = '<p class="follow"> <hr>Followrs :  '+reponse.followers+' <br>Repos : '+reponse.public_repos+' <br>Following : '+reponse.following+'<br><br></p>';
                        // et on affiche la div à la validation buttton
                        divInformation.style.display ='block';
                    })
                    //ON CATCH L'erreur
                    .catch(function(err){
                        alert("l'utilisateur inconnu, merci de réessayer");
                    })
    })
