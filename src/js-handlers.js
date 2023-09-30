/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

import getPlayerStats from "./api-functions.js";
import { useData } from "./data-info.js";

async function callPlayers() {
  const players = ["M_Mcflyyy", "M_Mcflyyy", "shaepods", "stilreign"];
  const playerStatsArray = [];
  const data = useData();

  for (let i = 0; i < players.length; i++) {
    try {
      // Check if the data is available and use it
      if (data) {
        const playerStats = data.find((item) => item.playerName === players[i]); // Assuming your data is an array of objects with a 'playerName' property
        if (playerStats) {
          playerStatsArray.push(playerStats);
        }
      } else {
        // If the data is not available, fetch it
        const playerStats = await getPlayerStats(players[i]);
        playerStatsArray.push(playerStats);
      }
    } catch (error) {
      console.error(`Error fetching or using stats for ${players[i]}:`, error);
    }
  }
  console.log("player stats array:", playerStatsArray);
}

/* for (const pick in players) {
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
    } */

callPlayers();
