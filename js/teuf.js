window.addEventListener("load", function(e){

         var btn_teuf = document.getElementById('btn_teuf');
        
         btn_teuf.addEventListener('click', function(e) {
            document.body.classList.toggle("dark");
            btn_teuf.classList.toggle("btn-on");
            
        //modification du texte du button
            var textBtn = document.getElementById("textBtn");
            if(textBtn.innerHTML === "Mode teuf"){
                textBtn.innerHTML = "Mode travail";
            }else{
                textBtn.innerHTML = "Mode teuf";
            }


            document.getElementById("header").classList.toggle("main-header-on");
            // document.getElementById("main-img").classList.toggle("main-img-on");
            document.getElementById("projet-img").classList.toggle("projet-img-on");
            document.getElementById("divJaune").classList.toggle("jaune_allume");
            document.getElementById("divJS").classList.toggle("textJS_allume");
            document.getElementById("mp3_player").classList.toggle("mp3_player_on");
            

            var article= document.getElementsByClassName("article");
            for(i=0; i<article.length; i++){
                article[i].classList.toggle("article-on");
            }
            var articleL= document.getElementsByClassName("art-left");
            for(i=0; i<articleL.length; i++){
                articleL[i].classList.toggle("articleL-on");
            }
            var section= document.getElementsByClassName("section");
            for(i=0; i<section.length; i++){
                section[i].classList.toggle("section-on");
            }
        
        });


  });
