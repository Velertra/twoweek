export default async function getPlayerList(player) {
    const apiKey = "8981cdfb015fb08c5a0bb45fe871e5c375ef34e1c8ddf3476df198b483b51614";
    
    try {
      const response = await fetch(
        `http://api.esportsearnings.com/v0/LookupHighestEarningPlayersByGame?apikey=8981cdfb015fb08c5a0bb45fe871e5c375ef34e1c8ddf3476df198b483b51614&gameid=534`, 
        {
            mode: 'no-cors',
            
        });
      if (response.ok) {
        const playerList = await response.json();
        console.log(playerList)
        return playerList;
      }
    } catch {
      console.log(Error, "this is a no go on the api home boy")
    }
  }