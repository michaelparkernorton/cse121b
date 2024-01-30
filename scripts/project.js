const link = `https://script.googleusercontent.com/macros/echo?user_content_key=TWRoq9tE8EXS4tX5PgL6dJA0sEIyCKnkKBuBZag4eZSBo_G8kzzG31c9xiSdIug3yTqjrC7nwcN6k9ovPc9Di8Q_P8CEebOIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI8WeWdA16be5QIqVNbb26IKk80DMBdupXDlhajCIhQFdMnZ29P8ayTIqKk2EvT3LaMWFLbeABmCBpYTnYf13Ef8Eqx3Gnv6Yg&lib=MhWEx1VRtJCjkT0F-E2LvlEngEDx33c-r`;

//THE SHS SCHEDULE PAGE
const link2 = "https://strasburghs.rschoolteams.com/page/2981"
/* Step 3: Declare and initialize global variables */
const gamesElement = document.getElementById("games");
const template = document.querySelector("[data-template]");
let gameList = [];

/* Step 4: async displayGames Function */
const displayGames = (games) =>
  games.forEach((game) => {
    const card = template.content.cloneNode(true).children[0]
    const cardDate = card.querySelector("[data-date]")
    const cardTime = card.querySelector("[data-time]")
    const cardOpponent = card.querySelector("[data-opponent]")
    const cardLocation = card.querySelector("[data-location]")
    let date = new Date(game.Date).toLocaleDateString()
    let time = new Date(game.Time).toLocaleTimeString()

    cardDate.textContent = date
    cardTime.textContent = time
    cardOpponent.textContent = game.Opponent
    cardLocation.textContent = game.Location

    gamesElement.append(card);
  });

/* Step 5 async getGames Function using fetch()*/
const getGames = async () => {
  const response = await fetch(link);
  if (response.ok) {
    gameList = await response.json();
  }
  // const tr = document.createElement("tr")
  displayGames(gameList.data)
};

getGames();