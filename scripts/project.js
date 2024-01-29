const link = `https://script.googleusercontent.com/macros/echo?user_content_key=TWRoq9tE8EXS4tX5PgL6dJA0sEIyCKnkKBuBZag4eZSBo_G8kzzG31c9xiSdIug3yTqjrC7nwcN6k9ovPc9Di8Q_P8CEebOIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI8WeWdA16be5QIqVNbb26IKk80DMBdupXDlhajCIhQFdMnZ29P8ayTIqKk2EvT3LaMWFLbeABmCBpYTnYf13Ef8Eqx3Gnv6Yg&lib=MhWEx1VRtJCjkT0F-E2LvlEngEDx33c-r`;

//THE SHS SCHEDULE PAGE
const link2 = "https://strasburghs.rschoolteams.com/page/2981"
/* Step 3: Declare and initialize global variables */
const gamesElement = document.getElementById("games");
let gameList = [];

/* Step 4: async displayGames Function */
const displayGames = (games) =>
  games.forEach((game) => {
    const article = document.createElement("article");
    const p1 = document.createElement("p");
    p1.textContent = game.Date;
		// const p2 = document.createElement("p");
    // p2.textContent = game.Event;
		// const p3 = document.createElement("p");
    // p3.textContent = game.Location;
		// const p4 = document.createElement("p");
    // p4.textContent = game.Opponent;
		// const p5 = document.createElement("p");
    // p5.textContent = game.Time;
		// const p6 = document.createElement("p");
    // p6.textContent = game.templeName;
    // const img = document.createElement("img");
    // img.src = game.imageUrl;
    // img.alt = game.location;
    article.appendChild(p1);
    // article.appendChild(p2);
    // article.appendChild(p3);
    // article.appendChild(p4);
    // article.appendChild(p5);
    // article.appendChild(p6);
    // article.appendChild(img);
    gamesElement.appendChild(article);
  });

/* Step 5 async getGames Function using fetch()*/
const getGames = async () => {
  console.log('I made it inside getGames')
  console.log(link);
  const response = await fetch(link);
  // const response = await fetch(link2);
  if (response.ok) {
    gameList = await response.json();
    console.log(gameList.data);
		console.log(typeof(gameList));
  }
  displayGames(gameList.data);
};

const getTemples = async () => {
  // const response = await fetch(link);
  const response = await fetch(link2);
  if (response.ok) {
    gameList = await response.json();
    console.log(gameList);
    // console.log(gameList.Array);
    console.log(typeof(gameList));
  }
  // displayGames(gameList);
};

getGames();
// getTemples();