async function getPlayerStats(player, time) {
  const response = await fetch(
    `https://fortnite-api.com/v2/stats/br/v2?name=${player}&accountType=epic&timeWindow=${time}`,
    {
      headers: {
        Authorization: process.env.FORTNITE_APIKEY,
      },
    },
  );
  const playerStats = await response.json();
  return playerStats;
}

module.exports = { getPlayerStats };
