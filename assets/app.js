const landingbtn = document.getElementById("center-btn");
const nav = document.getElementById("header");
const cardContainer = document.getElementById("character-card-container");
var searchID = "";
var movieArray = [];
const headerDiv = document.getElementById("input-field");
const navBtns = document.getElementById("choice-btn");
const cardCol = document.getElementById("char-card");
const movieCol = document.getElementById("movie-card");

cardContainer.classList.add("hide");
landingbtn.addEventListener("click", function (event) {
  event.preventDefault();

  $('document').ready(myMove("img-1"));
  $('document').ready(myReMove("img-2"));
  $('document').ready(myReReMove("img-3"));
  $('document').ready(myReReReMove("img-4"));

  const choice = event.target;
  const groupChoice = choice.getAttribute("data-character");

  if (groupChoice == "avengers") {
    //Sets Search ID to avengers array
    var searchID = avengersID;
    //Searches Avengers Array 
    searchArray(searchID);

  }
  if (groupChoice == "villans") {
    //Sets Search ID to Villains array
    var searchID = villainsID;
    //Searches Villains Array 
    searchArray(searchID);

  }
  if (groupChoice == "guardians") {
    //Sets Search ID to Guardians array
    var searchID = guardiansID;
    //Searches Guardians Array 
    searchArray(searchID);

  }
  if (groupChoice == "x-men") {
    //Sets Search ID to X-men array
    var searchID = xmenID;
    //Searches XMen Array 
    searchArray(searchID);

  if (groupChoice == "favourites"){
    var searchID = favouritesID;

    searchArray(searchID);
  }
  }  
});

//IMG 1 Slide
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
        removeHides ();
      } else {
        pos++;        
        elem.style.left = pos + '5px'; 
      }
    }
}
//IMG 2 Slide
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
//IMG 4 Slide
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
//IMG 3 Slide
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

// click event for header shown on second page
navBtns.addEventListener("click", function (event) {
  event.preventDefault();
  removeAllChildNodes(movieCol);
  removeAllChildNodes(cardCol);
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }          


  const choice = event.target;
  const groupChoice = choice.getAttribute("data-character");

  if (groupChoice == "avengers") {
    //Sets Search ID to avengers array
    var searchID = avengersID;
    //Searches Avengers Array 
    searchArray(searchID);

  }
  if (groupChoice == "villans") {
    //Sets Search ID to Villains array
    var searchID = villainsID;
    //Searches Villains Array 
    searchArray(searchID);

  }
  if (groupChoice == "guardians") {
    //Sets Search ID to Guardians array
    var searchID = guardiansID;
    //Searches Guardians Array 
    searchArray(searchID);

  }
  if (groupChoice == "x-men") {
    //Sets Search ID to X-men array
    var searchID = xmenID;
    //Searches XMen Array 
    searchArray(searchID);

  }
  if (groupChoice == "favourites"){
    var searchID = favouritesID;

    searchArray(searchID);
  }
});

  function removeHides () {
    navBtns.classList.remove("hide");
    cardContainer.classList.remove("hide");

  }


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

var wrapper = {
  // Avengers Movie Search vars
  spidermanMovies: ["Avengers Infinity", "Avengers Endgame", "Captain America Civil", "Spider-Man Homecoming", "Spider-man Far", "Spider-Man No", "Spider-Man", "Spider-Man 2", "Spider-man 3", "Amazing Spider-man 2", "Amazing Spider-man"],
  ironmanMovies: ["Iron-Man", "Iron-man-2", "Iron-man-3", "Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Captain America Civil", "Spider-Man Homecoming"],
  hulkMovies: ["The Incredible Hulk", "Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Thor Ragnarok"],
  thorMovies: ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Thor", "Thor The", "Thor Ragnarok", "Captain America Civil"],
  captainamericaMovies: ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Captain-America", "Captain America The Winter", "Captain America Civil"],
  blackwidowMovies: ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Iron-man-2", "Black Widow", "Captain America Civil"],
  hawkeyeMovies: ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Thor"],
  blackpantherMovies: ["Black Panther", "Avengers Infinity", "Avengers Endgame"],
  doctorstrangeMovies: ["Avengers Infinity", "Avengers Endgame", "Doctor Strange", "Spider-Man No"],
  antmanMovies: ["Avengers Infinity", "Avengers Endgame", "Ant-Man", "Ant-man and"],
  captainmarvelMovies: ["Avengers Endgame", "Marvel"],
  nickfuryMovies: ["Avengers", "Avengers Age", "Avengers Infinity", "Avengers Endgame", "Marvel"],
  scarletwitchMovies: ["Avengers Age", "Avengers Infinity", "Avengers Endgame", "Captain America Civil"],
  visionMovies: ["Avengers Age", "Avengers Infinity", "Captain America Civil", "Avengers Endgame"],

  // Villains Movie Search vars
  thanosMovies: ["Avengers", "Avengers Infinity", "Avengers Endgame"],
  lokiMovies: ["Avengers", "Thor The", "Thor Ragnarok", "Avengers Infinity", "Avengers Endgame"],
  ultronMovies: ["Avengers Age"],
  eddiebrockMovies: ["Venom", "Venom Let", "Spider-man 3"],
  helaMovies: ["Thor Ragnarok"],
  killmongerMovies: ["Black Panther"],
  greengoblinMovies: ["Spider-Man No"],
  doctoroctopusMovies: ["Spider-Man No", "Spider-Man 2"],
  ronanMovies: ["Marvel", "Guardians Of The"],
  mysterioMovies: ["Spider-man Far"],
  vultureMovies: ["Spider-Man Homecoming"],
  egoMovies: ["Guardians Of the Galaxy Vol"],

  // Guardians Movie Search vars
  peterquillMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"],
  gamoraMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"],
  draxMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"],
  grootMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"],
  rocketraccoonMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"],
  mantisMovies: ["Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"],
  nebulaMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol", "Avengers Infinity", "Avengers Endgame"],
  yonduMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol"],
  novaMovies: ["Guardians Of The", "Guardians Of the Galaxy Vol"],
  cosmoMovies: ["Guardians Of The"],
  adamwarlockMovies: ["Guardians Of the Galaxy Vol"],

  // X-Men Movie Search vars
  charlesxavierMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"],
  cyclopsMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"],
  wolverineMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix", "Logan", "The Wolverine", "X-Men Origins"],
  jeangreyMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"],
  stormMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"],
  beastMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"],
  gambitMovies: ["X-Men Origins"],
  rogueMovies: ["X-Men", "X2", "X-Men The Last"],
  kittyprydeMovies: ["X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"],
  deadpoolMovies: ["Deadpool", "Deadpool 2"],
  mystiqueMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"],
  magnetoMovies: ["X-Men", "X2", "X-Men The Last", "X-Men First", "X-Men Days", "X-Men Apocalypse", "Dark Phoenix"]
  
};

let icon = "";
let name = "";
let description = ""
//DOT POINT 2 - COMPLETE, ADD IN #3
function searchMarvelAPI(charID) {

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
      let iconPath = (data.data.results[0].thumbnail.path)
      //Applys file type    
      let icon = iconPath + ".jpg";
      //Loads Char name from API query
      let name = "Name: " + (data.data.results[0].name);
      //Checks if description for character exists
      //if (data.data.results[0].description) {  
      //Loads description
      let description = "Description: " + (data.data.results[0].description)
      //}
      //Finds Marvel Wiki URL
      let link = "Marvel Wiki: " +(data.data.results[0].urls[1].url);
      //MOVIE API STUFF
      //converts name to lowercase
      let texty = (data.data.results[0].name).toLowerCase();
      //takes name before ()
      let texty2 = texty.split("(")[0];
      //removes spaces
      let texty3 = texty2.replace(/ /g, "");
      //removes hyphens and adds Movies string
      let texty4 = texty3.replace("-", "") + "Movies";
      //changes from string to variable
      let movieArray = wrapper[texty4];
      if (movieArray === undefined) {
        console.log("missign key", texty4);
      } else {
        //runs search movies array    
        searchmoviesArray(movieArray);
        createCard(icon, name, description, link);
      }

    });

}

//For loop to run API requests for every char in array
function searchArray(array) {
  for (var i = 0; i < array.length; i++) {
    //Runs API search for individual ID's
    
     setTimeout(searchMarvelAPI(array[i]),2000);
  }
}

///////

//OMBD search function
function searchOMBDAPI(movieString) {
  fetch('http://www.omdbapi.com/?t=' + movieString + '&apikey=499dbfaf', {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow'
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      

      //Sets movie from data
      var movie = "Movie Title: " + (data.Title);
      //Sets year from data
      var year = "Year Released: " + (data.Year);
      //Finds plot in data
      var plot = "Plot Summary: " + (data.Plot);
      //Finds IMDB ID
      var IMBDID = (data.imbdID);
      //Converts ID to URL
      var IMBD = "IMDB ULR: " + "https://imdb.com/title/" + IMBDID;
      //Finds rating in data
      var rating = "IMDB Rating: " + (data.imdbRating);
      //Creates poster div
      //const moviePoster = document.createElement("img");
      //Finds poster url in data
      var poster = (data.Poster);
      //Applies src attribute and makes icon display   
     // moviePoster.setAttribute("src", poster);
      //Appends movieInfo
      //movieInfo.appendChild(moviePoster); movie info needs to be defined
      movieCard(poster, movie, year, plot, IMBDID, rating, IMBD);
    

    });
};

//For loop to run API requests for every movie
function searchmoviesArray(array) {
  //Selects ONE random movie for each character
  var randomChoice = array[Math.floor(Math.random()*array.length)];
 
      //Runs API search for Movie Queries
    setTimeout(searchOMBDAPI(randomChoice), 2000);
};




function createCard(heroImg, heroID, heroScript, heroLink) {
  const card = document.createElement("div");
  card.classList.add("row", "card-sizing");
  cardCol.appendChild(card);


  const cardBorder = document.createElement("div");
  cardBorder.classList.add("col", "s12", "m7");
  card.appendChild(cardBorder);

  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardBorder.appendChild(cardEl);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("card-image");
  cardEl.appendChild(imageDiv);

  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", heroImg);
  imageDiv.appendChild(heroImage);

  const heroName = document.createElement("span");
  heroName.classList.add("card-title");
  heroName.textContent = heroID;
  cardEl.appendChild(heroName);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardEl.appendChild(cardContent);

  const heroDescription = document.createElement("p");
  heroDescription.textContent = heroScript;
  cardContent.appendChild(heroDescription);

  const heroURL = document.createElement("a");
  heroURL.setAttribute("href", heroLink);
  cardContent.appendChild(heroURL);

  const favBtn = document.createElement("button");
  favBtn.classList.add("fav-btn", "waves-effect", "waves-light","btn-large");
  favBtn.textContent = "Favourite";
  cardContent.appendChild(favBtn);
  
};

function movieCard(moviePoster, movies, yearMade, story, IMBDData, movieRating, xLink) {

  const cardFrame = document.createElement("div");
  cardFrame.classList.add("row", "card-sizing");
  movieCol.appendChild(cardFrame);

  const movieCardBorder = document.createElement("div");
  movieCardBorder.classList.add("col", "s12", "m7");
  cardFrame.appendChild(movieCardBorder);

  const movieCardEl = document.createElement("div");
  movieCardEl.classList.add("card");
  movieCardBorder.appendChild(movieCardEl);

  const posterDiv = document.createElement("div");
  posterDiv.classList.add("card-image");
  movieCardEl.appendChild(posterDiv);

  const posterImage = document.createElement("img");
  posterImage.setAttribute("src", moviePoster + ".jpg");
  posterDiv.appendChild(posterImage);

  const movieName = document.createElement("span");
  movieName.classList.add("card-title");
  movieName.textContent = movies;
  movieCardEl.appendChild(movieName);

  const movieCardContent = document.createElement("div");
  movieCardContent.classList.add("card-content");
  movieCardEl.appendChild(movieCardContent);

  const movieInfo = document.createElement("ul");
  movieCardContent.appendChild(movieInfo);

  const movieYear = document.createElement("li");
  movieYear.textContent = yearMade;
  movieInfo.appendChild(movieYear);

  const plotShort = document.createElement("li");
  plotShort.textContent = story;
  movieInfo.appendChild(plotShort);

  const IMBDId = document.createElement("li");
  IMBDId.textContent = IMBDData;
  movieInfo.appendChild(IMBDId);

  const IMBDrating = document.createElement("li");
  IMBDrating.textContent = movieRating;
  movieInfo.appendChild(IMBDrating);


  const movieCardAction = document.createElement("div");
  movieCardAction.classList.add("card-action");
  movieCardEl.appendChild(movieCardAction);

  const externalLink = document.createElement("a");
  externalLink.setAttribute("href", xLink);
  movieInfo.appendChild(externalLink);
  //append

};


//For loop to run API requests for every char in array
function searchArray (array){
  for (var i= 0; i< array.length; i++ ){
    //Runs API search for individual ID's
  searchMarvelAPI (array[i]);
}};


