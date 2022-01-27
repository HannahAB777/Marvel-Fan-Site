// Need Wanda and Vision
const avengersID = [1009610, 1009368, 1009351, 1009664, 1009220, 1009189, 1009338, 1009187, 1009282, 1010801, 1010338, 1009471]
//Need Thanos, Loki, Ultron, Venom, Hela, Killmonger, Green Goblin, Doc Ok, Ronan, Magneto, Mysteque, Vulture, Ego
const villainsID = []
//Need Jean Grey, Cyclops, Beast, Professor X, Wolverine, Gambit, Kitty Pride, Rogue, Deadpool, Storm
const xmenID = []
//Need Gamora, Nova, Adam Warlock, Groot, Rocket, Nebula, Yondu, Drax, Cosmo, Mantis
const guardiansID = [1011299,]

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

//Sets searchID to IDarray DO THIS AFTER BUTTON CLICK
var searchID = avengersID;
searchArray (searchID);



var id = null;
function myMove(picture) {
    var elem = document.getElementById(picture);   
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
        landingbtn.classList.add("hide");
        //Adds hide class to the nav
        nav.classList.add("hide");
      } else {
        pos++;        
        elem.style.left = pos + '5px'; 
      }
    }
}

var id2 = null;
function myReMove(picture) {
    var elem = document.getElementById(picture);   
    var pos = 0;
    clearInterval(id2);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 250) {
        clearInterval(id2);
      } else {
        pos++;        
        elem.style.right = pos + '5px'; 
      }
    }
}

var id3 = null;
function myReReMove(picture) {
    var elem = document.getElementById(picture);   
    var pos = 0;
    clearInterval(id3);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 250) {
        clearInterval(id3);
      } else {
        pos++;        
        elem.style.left = pos + '5px'; 
      }
    }
}

var id4 = null;
function myReReReMove(picture) {
    var elem = document.getElementById(picture);   
    var pos = 0;
    clearInterval(id4);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 250) {
        clearInterval(id4);
      } else {
        pos++;        
        elem.style.right = pos + '5px'; 
      }
    }
}

fetch('https://gateway.marvel.com:443/v1/public/characters/' + charID + '?apikey=20e21429471697c0e32c4afdce9f7fb2&limit=100&ts=1&hash=a86036e73c0f0f248814ec5b218bb257'