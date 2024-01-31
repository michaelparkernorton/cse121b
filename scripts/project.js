const link = `https://script.googleusercontent.com/macros/echo?user_content_key=TWRoq9tE8EXS4tX5PgL6dJA0sEIyCKnkKBuBZag4eZSBo_G8kzzG31c9xiSdIug3yTqjrC7nwcN6k9ovPc9Di8Q_P8CEebOIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI8WeWdA16be5QIqVNbb26IKk80DMBdupXDlhajCIhQFdMnZ29P8ayTIqKk2EvT3LaMWFLbeABmCBpYTnYf13Ef8Eqx3Gnv6Yg&lib=MhWEx1VRtJCjkT0F-E2LvlEngEDx33c-r`;

//THE SHS SCHEDULE PAGE
const link2 = "https://strasburghs.rschoolteams.com/page/2981"
const link3 = "../json/project.json"
const link4 = "../json/previousSeason.json"
/* Step 3: Declare and initialize global variables */
const gamesElement = document.getElementById("games")
const template = document.querySelector("[data-template]")
let gameList = []
const goalsFor = []
const goalsAgainst = []
const scores = []
const wins = []
const losses = []

function convertWinsLosses(result, type) {
  if (result == type) {
    return 1
  }
  else {
    return 0
  }
}

/* Step 4: async displayGames Function */
const displayGames = (games) =>
  games.forEach((game) => {
    goalsFor.push(parseInt(game.Score.slice(0,1)))
    goalsAgainst.push(parseInt(game.Score.slice(-1)))
    wins.push(convertWinsLosses(game['W/L'], 'W'))
    losses.push(convertWinsLosses(game['W/L'], 'L'))
    const card = template.content.cloneNode(true).children[0]
    const cardDate = card.querySelector("[data-date]")
    const cardTime = card.querySelector("[data-time]")
    const cardOpponent = card.querySelector("[data-opponent]")
    const cardLocation = card.querySelector("[data-location]")
    const cardScore = card.querySelector("[data-score]")
    const cardWL = card.querySelector("[data-w-l]")
    let date = new Date(game.Date).toLocaleDateString()
    let time = new Date(game.Time).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })    

    cardDate.textContent = date
    cardTime.textContent = time
    cardOpponent.textContent = game.Opponent
    cardLocation.textContent = game.Location
    cardScore.textContent = game.Score
    cardWL.textContent = game['W/L']

    gamesElement.append(card);
  });

/* Step 5 async getGames Function using fetch()*/
const getGames = async () => {
  const response = await fetch(link4);
  if (response.ok) {
    gameList = await response.json();
  }
  // const tr = document.createElement("tr")
  displayGames(gameList.data)
  console.log(goalsFor);
  console.log(goalsAgainst);
  const initialValue = 0;
  const goalsForTotal = goalsFor.reduce((accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
  const goalsAgainstTotal = goalsAgainst.reduce((accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  const winsTotal = wins.reduce((accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
  const lossesTotal = losses.reduce((accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  console.log(goalsForTotal);
  console.log(goalsAgainstTotal);
  console.log(winsTotal);
  console.log(lossesTotal);

  const card = template.content.cloneNode(true).children[0]
  const cardDate = card.querySelector("[data-date]")
  const cardTime = card.querySelector("[data-time]")
  const cardOpponent = card.querySelector("[data-opponent]")
  const cardLocation = card.querySelector("[data-location]")
  const cardScore = card.querySelector("[data-score]")
  const cardWL = card.querySelector("[data-w-l]")
  cardDate.textContent = ""
  cardTime.textContent = ""
  cardOpponent.textContent = ""
  cardLocation.textContent = ""
  cardScore.textContent = `${goalsForTotal} - ${goalsAgainstTotal}`
  cardWL.textContent = `${winsTotal} - ${lossesTotal}`

  gamesElement.append(card);
};

getGames();