const landingbtn = document.getElementById("center-btn");
const nav = document.getElementById("header");
const cardContainer = document.getElementById("charcter-card-container");
var searchID = "";
var movieArray = [];
const headerDiv = document.getElementById("input-field");
const navBtns = document.getElementById("choice-btn");

cardContainer.classList.add("hide");

landingbtn.addEventListener("click", function(event){
    landingbtn.classList.add("hide");
    nav.classList.add("hide");
    navBtns.classList.remove("hide");
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
// const villainsID = [Thanos, Loki, Ultron, Venom, Hela, Killmonger, Green Goblin, Doc Ok, Ronan, Mysterio, Vulture, Ego]
const villainsID = [1009652, 1009407, 1009685, 1010787, 1011482, 1011289, 1011435, 1009276, 1010344, 1009464, 1009699, 1011060]
// const xmenID = [Jean Grey, Prof X, Beast, Cyclops, Wolverine, Gambit, Storm, Rogue, Kitty Pride, Deadpool, Mystique, Magneto]
const xmenID = [1009496, 1009733, 1009175, 1009257, 1009718, 1009313, 1009629, 1009546, 1009508, 1009268, 1009465, 1009417]
// const guardiansID = [Star-Lord, Gamora, Drax, Groot, Rocket, Mantis, Nebula, Yondu, Nova, Cosmo, Adam Warlock]
const guardiansID = [1010734, 1010763, 1010735, 1010743, 1010744, 1011026, 1010365, 1011542, 1009477, 1011353, 1010354]
//////

// Avengers Movie Search vars
var spidermanMovies = ["Avengers Infinity", "Avengers Endgame", "Captain America Civil", "Spider-Man Homecoming", "Spider-man Far", "Spider-Man No", "Spider-Man", "Spider-Man 2", "Spider-man 3", "Amazing Spider-man 2", "Amazing Spider-man"]
var ironmanMovies = ["Iron-Man", "Iron-man-2", "Iron-man-3", "Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Captain America Civil", "Spider-Man Homecoming"]
var hulkMovies = ["The Incredible Hulk", "Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Thor Ragnarok" ]
var thorMovies = ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Thor", "Thor The", "Thor Ragnarok", "Captain America Civil"]
var captainamericaMovies = ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Captain-America", "Captain America The Winter", "Captain America Civil"]
var blackwidowMovies = ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Iron-man-2", "Black Widow", "Captain America Civil"] 
var hawkeyeMovies = ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Thor"]
var blackpantherMovies = ["Black Panther", "Avengers Infinity", "Avengers Endgame"]
var doctorstrangeMovies = ["Avengers Infinity", "Avengers Endgame", "Doctor Strange", "Spider-Man No"]
var antmanMovies = ["Avengers Infinity", "Avengers Endgame", "Ant-Man", "Ant-man and"] 
var captainmarvelMovies = ["Avengers Endgame", "Marvel"]
var nickfuryMovies = ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Marvel"]
var scarletwitchMovies = ["Avengers Age", "Avengers Infinity", "Avengers Endgame", "Captain America Civil" ]
var visionMovies  = ["Avengers Age", "Avengers Infinity", "Captain America Civil", "Avengers Endgame"]

// Villains Movie Search vars
var thanosMovies = ["Avengers", "Avengers Infinity", "Avengers Endgame"]
var lokiMovies = ["Avengers", "Thor The", "Thor Ragnarok", "Avengers Infinity", "Avengers Endgame"]
var ultronMovies = ["Avengers Age"]
var eddiebrockMovies = ["Venom", "Venom Let", "Spider-man 3"]
var helaMovies = ["Thor Ragnarok"]
var killmongerMovies = ["Black Panther"]
var greengoblinMovies = ["Spider-Man No"]
var doctoroctopusMovies = ["Spider-Man No", "Spider-Man 2" ]
var ronanMovies = ["Marvel", "Guardians Of The"]
var mysterioMovies = ["Spider-man Far"]
var vultureMovies = ["Spider-Man Homecoming"]
var egoMovies  = ["Guardians Of the Galaxy Vol"]

// Guardians Movie Search vars
var peterquillMovies = ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"]
var gamoraMovies = ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"]
var draxMovies  = ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"]
var grootMovies  = ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"]
var rocketracoonMovies  = ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"]
var mantisMovies  = ["Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"]
var nebulaMovies  = ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"]
var yonduMovies  = ["Guardians Of The", "Guardians Of the Galaxy Vol"]
var novaMovies  = ["Guardians Of The", "Guardians Of the Galaxy Vol"]
var cosmoMovies  = ["Guardians Of The"]
var adamwarlockMovies  = ["Guardians Of the Galaxy Vol"]

// X-Men Movie Search vars
var charlesxavierMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
var cyclopsMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
var wolverineMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix", "Logan", "The Wolverine", "X-Men Origins"]
var jeangreyMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
var stormMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
var beastMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
var gambitMovies = ["X-Men Origins"]
var rogueMovies = ["X-Men", "X2", "X-Men The Last"]
var kittyprydeMovies = ["X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
var deadpoolMovies = ["Deadpool", "Deadpool 2"]
var mystiqueMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
var magnetoMovies = ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]


//DOT POINT 2 - COMPLETE, ADD IN #3
function searchMarvelAPI (charID) {

// <div class="row">
//<div class="col s12 m7">
//<div class="card">
//  <div class="card-image">
//    <img src="images/sample-1.jpg">
//    <span class="card-title">Card Title</span>
//  </div>
//  <div class="card-content">
//    <p>I am a very simple card. I am good at containing small bits of information.
//    I am convenient because I require little markup to use effectively.</p>
//  </div>
//  <div class="card-action">
//    <a href="#">This is a link</a>
//  </div>
//</div>
//</div>
//</div>
function createCard(icon, name, description, movie, year, plot, IMBD, rating, link){
  const card = document.createElement("div");
  card.classList.add("row");
  const cardBorder = document.createElement("div");
  cardBorder.classList.add("col s12 m7");
  card.appendChild(cardBorder);
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardBorder.appendChild(cardEl);
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("card-image");
  cardEl.appendChild(imageDiv);
  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", icon);
  imageDiv.appendChild(img);
  const heroName = document.createElement("span");
  heroName.classList.add("card-title");
  heroName.textContent = name;
  cardEl.appendChild(heroName);
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardEl.appendChild(cardContent);
  const heroDescription = document.createElement("p");
  heroDescription.textContent = description;
  const movieInfo = document.createElement("ul");
  cardContent.appendChild(movieInfo);
  const movieTitle = document.createElement("li");
  movieTitle.textContent = movie;
  movieInfo.appendChild(movieTitle);
  const movieYear = document.createElement("li");
  movieYear.textContent = year;
  movieInfo.appendChild(movieYear);
  const plotShort = document.createElement("li");
  plotShort.textContent = plot;
  movieInfo.appendChild(plotShort);
  const IMBDId = document.createElement("li");
  IMBDId.textContent= IMBD;
  movieInfo.appendChild(IMBDId);
  const IMBDrating = document.createElement("li");
  IMBDrating.textContent = rating;
  movieInfo.appendChild(IMBDrating);
  const cardAction = document.createElement("div");
  cardAction.classList.add("card-action");
  cardEl.appendChild(cardAction);
  const externalLink = document.createElement("a");
  externalLink.setAttribute("href",link);
}


fetch('https://gateway.marvel.com:443/v1/public/characters/' + charID + '?apikey=20e21429471697c0e32c4afdce9f7fb2&limit=100&ts=1&hash=a86036e73c0f0f248814ec5b218bb257', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {  
    
    //Finds icon Url
    var iconPath = (data.data.results[0].thumbnail.path)
    //Applys file type    
    var icon = iconPath + ".jpg";   
    //Loads Char name from API query
    var name = (data.data.results[0].name);  
    //Checks if description for character exists
    if (data.data.results[0].description) {  
    //Loads description
    var description =  (data.data.results[0].description)       
    }  
    //Finds Marvel Wiki URL
    var link = (data.data.results[0].urls[1].url);         
    //MOVIE API STUFF
    //converts name to lowercase
    var texty = (data.data.results[0].name).toLowerCase();
    //takes name before ()
    var texty2 = texty.split("(")[0];
    //removes spaces
    var texty3 = texty2.replace(/ /g, "");
    //removes hyphens and adds Movies string
    var texty4 = texty3.replace("-", "") + "Movies";
    //changes from string to variable
    var movieArray = window[texty4]; 
    //runs search movies array    
    searchmoviesArray (movieArray);
  });

};

//For loop to run API requests for every char in array
function searchArray (array){
  for (var i= 0; i< array.length; i++ ){
    //Runs API search for individual ID's
    
  searchMarvelAPI (array[i]);
}};

///////

//OMBD search function
function searchOMBDAPI (movieString) {
fetch('http://www.omdbapi.com/?t=' + movieString + '&apikey=499dbfaf', {
  method: 'GET',
  credentials: 'same-origin', 
  redirect: 'follow'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    //Sets movie from data
    var movie =  (data.Title) 
    //Sets year from data
    var year =  (data.Year)    
    //Finds plot in data
    var plot =  (data.Plot)   
    //Finds IMDB ID
    var movie =  (data.imbdID)
    //Converts ID to URL
    var IMBD = "https://imdb.com/title/" + movie
    //Finds rating in data
    var rating =  (data.imdbRating)
    //Creates poster div
    const moviePoster = document.createElement("img");
    //Finds poster url in data
    var poster = (data.Poster);
    //Applies src attribute and makes icon display   
    moviePoster.setAttribute("src", poster);
    //Appends movieInfo
    movieInfo.appendChild(moviePoster);

  });
};

//For loop to run API requests for every movie
function searchmoviesArray (array){
  for (var i= 0; i< array.length; i++ ){
    //Runs API search for Movie Queries
    searchOMBDAPI (array[i]);
}};



function createCard(icon, name, description){
  const card = document.createElement("div");
  card.classList.add("row");
  const cardBorder = document.createElement("div");
  cardBorder.classList.add("col s12 m7");
  card.appendChild(cardBorder);
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardBorder.appendChild(cardEl);
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("card-image");
  cardEl.appendChild(imageDiv);
  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", icon);
  imageDiv.appendChild(heroImage);
  const heroName = document.createElement("span");
  heroName.classList.add("card-title");
  heroName.textContent = name;
  cardEl.appendChild(heroName);
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardEl.appendChild(cardContent);
  const heroDescription = document.createElement("p");
  heroDescription.textContent = description;

}

function movieCard(cardContent, movie, year, plot, IMBD, rating, link) {

  const movieInfo = document.createElement("ul");
  cardContent.appendChild(movieInfo);
  const movieTitle = document.createElement("li");
  movieTitle.textContent = movie;
  movieInfo.appendChild(movieTitle);
  const movieYear = document.createElement("li");
  movieYear.textContent = year;
  movieInfo.appendChild(movieYear);
  const plotShort = document.createElement("li");
  plotShort.textContent = plot;
  movieInfo.appendChild(plotShort);
  const IMBDId = document.createElement("li");
  IMBDId.textContent= IMBD;
  movieInfo.appendChild(IMBDId);
  const IMBDrating = document.createElement("li");
  IMBDrating.textContent = rating;
  movieInfo.appendChild(IMBDrating);
  const cardAction = document.createElement("div");
  cardAction.classList.add("card-action");
  cardEl.appendChild(cardAction);
  const externalLink = document.createElement("a");
  externalLink.setAttribute("href",link);
  
}

//boop
=======

//Sets searchID to IDarray DO THIS AFTER BUTTON CLICK
var searchID = guardiansID;
searchArray (searchID);

