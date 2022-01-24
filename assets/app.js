const landingbtn = document.getElementById("center-btn");
const nav = document.getElementById("header");
const cardContainer = document.getElementById("charcter-card-container");

cardContainer.classList.add("hide");

landingbtn.addEventListener("click", function(event){
    landingbtn.classList.add("hide");
    nav.classList.add("hide");
    cardContainer.classList.remove("hide");
    const choice = event.target;
    const groupChoice = choice.getAttribute("data-character");
    
    if (groupChoice == "avengers"){
        //run functions for avenger
    }
    if (groupChoice == "villans"){
        //run function for villans
    }
    if (groupChoice == "guardians"){
        //run function for guardians
    }
    if (groupChoice == "x-men"){
        //run function for x-men
    }


});

