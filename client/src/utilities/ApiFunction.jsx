//api to call for  stats of select player,
async function getPlayerStats(player) {
  const apiKey = import.meta.env.VITE_REACT_APP_TWOWEEK_KEY;

  try {
    const response = await fetch(
      `https://fortnite-api.com/v2/stats/br/v2?name=${player}&accountType=epic`,
      {
        headers: {
          Authorization: apiKey,
        },
      },
    );
    if (response.ok) {
      const playerStats = await response.json();
      return playerStats;
    }
  } catch {
    //error.log(Error, "this is a no go on the api home boy")
  }
}

async function itemShop() {
  const apiKey = import.meta.env.VITE_REACT_APP_TWOWEEK_KEY;

  try {
    const response = await fetch(
      `https://fortnite-api.com/v2/shop/br`,
      {
        headers: {
          Authorization: apiKey,
        },
      },
    );
    if (response.ok) {
      const playerStats = await response.json();
      return playerStats;
    }
  } catch {
    //error.log(Error, "this is a no go on the api home boy")
  }
}

export { getPlayerStats, itemShop }