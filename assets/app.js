const landingbtn = document.getElementById("center-btn");
const nav = document.getElementById("header");
const cardContainer = document.getElementById("charcter-card-container");
var searchID = "";

cardContainer.classList.add("hide");

landingbtn.addEventListener("click", function(event){
    landingbtn.classList.add("hide");
    nav.classList.add("hide");
    cardContainer.classList.remove("hide");
    const choice = event.target;
    const groupChoice = choice.getAttribute("data-character");
    
    if (groupChoice == "avengers"){
      //Sets Search ID to avengers array
      var searchID = avengersID;
      //Searches Avengers Array 
      searchArray (searchID);
        
    }
    if (groupChoice == "villans"){
      //Sets Search ID to Villains array
      var searchID = villainsID;
      //Searches Villains Array 
      searchArray (searchID);
        
    }
    if (groupChoice == "guardians"){
      //Sets Search ID to Guardians array
      var searchID = guardiansID;
      //Searches Guardians Array 
      searchArray (searchID);
       
    }
    if (groupChoice == "x-men"){
      //Sets Search ID to X-men array
      var searchID = xmenID;
      //Searches XMen Array 
      searchArray (searchID);
        
    }
  });

//DOT POINT 1
// const avengersID = [Spiderman, Iron Man, Hulk, Thor, Captain America, Black Widow, Hawkeye, Black Panther, Doctor Strange, Antman, Captain Marvel, Nick Fury, Scarlet Witch, Vision]
const avengersID = [1009610, 1009368, 1009351, 1009664, 1009220, 1009189, 1009338, 1009187, 1009282, 1010801, 1010338, 1009471, 1009562, 1009697]
// const villainsID = [Thanos, Loki, Ultron, Venom, Hela, Killmonger, Green Goblin, Doc Ok, Ronan, Magneto, Mysterio, Mystique, Vulture, Ego  ]
const villainsID = [1009652, 1009407, 1009685, 1010787, 1011482, 1011289, 1011435, 1009276, 1010344, 1009417, 1009464, 1009465, 1009699, 1011060 ]
// const xmenID = [Jean Grey, Prof X, Beast, Cyclops, Wolverine, Gambit, Storm, Rogue, Kitty Pride, Deadpool ]
const xmenID = [1009496, 1009733, 1009175, 1009257, 1009718, 1009313, 1009629, 1009546, 1009508, 1009268]
// const guardiansID = [TeamID, Star-Lord, Gamora, Drax, Groot, Rocket, Mantis, Nebula, Yondu, Nova, Cosmo, Adam Warlock]
const guardiansID = [1011299, 1010734, 1010763, 1010735, 1010743, 1010744, 1011026, 1010365, 1011542, 1009477, 1011353, 1010354]
//////

//DOT POINT 2 - COMPLETE, NEEDS TO BE TRIGGERED BY BUTTON THEN ADD IN #3
function searchMarvelAPI (charID) {

fetch('https://gateway.marvel.com:443/v1/public/characters/' + charID + '?apikey=20e21429471697c0e32c4afdce9f7fb2&limit=100&ts=1&hash=a86036e73c0f0f248814ec5b218bb257', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Results Array path
    console.log(data.data.results);

    //Loads Char name
     var name = (data.data.results[0].name)
     //Sets Char name
     $("#title").text(name);

     //Checks if description for character exists
     if (data.data.results[0].description) {
       //Loads description
     var description =  (data.data.results[0].description)
     //Sets Description
     $("#date1").text(description);
     }
    
     //Finds icon Url
     var iconPath = (data.data.results[0].thumbnail.path)
     //Applys file type       
     var icon1url = iconPath + ".jpg";
     //Applies src attribute and makes icon display
     $('#icon1').attr('src', icon1url);
     
     //Finds Marvel Wiki URL
     var url = (data.data.results[0].urls[1].url)
     //Sets URL
     $("#humid1").text(url);     
  });

};

//For loop to run API requests for every char in array
function searchArray (array){
  for (var i= 0; i< array.length; i++ ){
    //Runs API search for individual ID's
  searchMarvelAPI (array[i]);
}};

<<<<<<< HEAD




///////
=======
//Sets searchID to IDarray DO THIS AFTER BUTTON CLICK
var searchID = guardiansID;
searchArray (searchID);
///////
>>>>>>> 0a70989f07a5c76173726a1fbb0e1b205a12ef63
