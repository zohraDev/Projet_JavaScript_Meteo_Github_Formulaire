//fichier test
document.querySelector("div").innerHTML ='<img src ="${reponse.avatar_url}"  alt="photo profile">'
document.querySelector("#loginUtilisateur").textContent =reponse.avatar_url
document.querySelector("#loginUtilisateur").textContent =reponse.login

document.querySelector("#nombreRepos").textContent =reponse.public_repos
document.querySelector("#nombreSuivi").textContent =reponse.following
document.querySelector("#nombreFollowrs ").textContent =reponse.followers