export default async function getPlayerStats(player) {
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

// export default getPlayerStats();

// &timeWindow=${time}
