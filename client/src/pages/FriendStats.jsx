import MainPlayers from "../utilities/MainPlayers";
import MiniStats from "../components/MiniStats";
import { useEffect, useState } from "react";

const FriendStats = () => {
    const animalsList = [
        "M_Mcflyyy",
        "shaepods",
        "stilreign",
      ];

      
    return ( 
        <div className="bottom-stats">

        {/* {animalsList.map((player, index) => (
          <div key={index}>{console.log(player)}
            <MiniStats stats={playerData.data} brType={"duo"}/>
          </div>
        ))} */}
        <MainPlayers
          players={animalsList}
          renderPlayer={(playerData, index) => (
            <div key={index}>
              <h2>{playerData.account.name}</h2>
              <MiniStats  stats={playerData} brType="duo"/>
              <MiniStats stats={playerData} brType="overall"/>
              <MiniStats key={index} stats={playerData} brType="squad"/>
            </div>
          )}
        />
      </div>
     );
}
 
export default FriendStats;