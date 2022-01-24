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

