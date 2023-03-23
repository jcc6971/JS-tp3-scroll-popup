

document.addEventListener ("scroll",() =>{
   


    console.log(window.innerHeight)
    console.log(window.scrollY)
    console.log(document.body.offsetHeight)


    
    if (window.scrollY=== 0) {
        navbar.style.height = "90px"}
        else {navbar.style.height="45px"};
        
        if ((improvise.offsetTop- 90) <= window.pageYOffset  ) {
            imgImprovise.style.opacity ="1"
            imgImprovise.style.transform ="none"
        };

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
        {popup.style.opacity=1
        popup.style.transform="translateX(0)"}
    
    closeBtn.addEventListener("click",()=>{
       

        popup.remove();
    })})



// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
