async function getPlayerStats(player) {
  const response = await fetch(
    `https://fortnite-api.com/v2/stats/br/v2?name=${player}&accountType=epic`,
    {
      headers: {
        Authorization: process.env.FORTNITE_APIKEY,
      },
    },
  );
  const playerStats = await response.json();
  return playerStats;
}

class DOMStats {
  constructor() {}

  // allows to pick what data (solo, duo, squads)
  pickWhichStats(player, ...choices) {
    for (const pick in choices) {
      const gameType = choices[pick];
      const result = player.data.stats.all[gameType];

      return result;
    }
  }

  // displays info to the dom, also creates divs to contain info
  displayStats(value, container) {
    const divContainer = `${container}_div`;
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("id", divContainer);
    bottom_div.appendChild(itemContainer);
    const nameDiv = document.createElement("div");
    const dataName = JSON.stringify(container).slice(1, -1);
    nameDiv.textContent = `${dataName}`;
    itemContainer.appendChild(nameDiv);
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const result = JSON.stringify(value[key]);
        const listItem = document.createElement("div");
        listItem.textContent = `${result}`;
        itemContainer.appendChild(listItem);
      }
    }
  }

  // couldnt change "key" in the displayStats function. same function
  displayTitles(value, container) {
    const divContainer = container;
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("id", divContainer);
    // added div so the containers would line up
    bottom_div.appendChild(itemContainer);
    const blankDiv = document.createElement("div");
    blankDiv.textContent = " ";
    itemContainer.appendChild(blankDiv);
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const result = JSON.stringify(value[key]);
        const listItem = document.createElement("div");
        listItem.textContent = `${key}`;
        itemContainer.appendChild(listItem);
      }
    }
  }

  displayNames(value) {}
}

// function that filters through the names and calls the api
async function callPlayers() {
  const players = ["M_Mcflyyy", "M_Mcflyyy", "shaepods", "stilreign"];
  const domClass = new DOMStats();

  for (const pick in players) {
    const playerStats = await getPlayerStats(players[pick]);
    // console.log(pick)
    if (pick == 0) {
      console.log(playerStats);
      const titleNames = domClass.pickWhichStats(playerStats, "overall");
      domClass.displayTitles(titleNames, "title_names");
    } else {
      const playerInfo = domClass.pickWhichStats(playerStats, "overall");
      domClass.displayStats(playerInfo, playerStats.data.account.name);
    }
  }
}
callPlayers();
