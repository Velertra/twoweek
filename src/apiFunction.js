export default async function getPlayerStats(player) {
    const apiKey = import.meta.env.VITE_REACT_APP_TWOWEEK_KEY;
    const response = await fetch(
      `https://fortnite-api.com/v2/stats/br/v2?name=${player}&accountType=epic`,
      {
        headers: {
          Authorization: apiKey,
        },
      },
    );
    const playerStats = await response.json();
    console.log(playerStats)
    return playerStats;
  }