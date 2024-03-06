import MainPlayers from "../utilities/MainPlayers";
import MiniStats from "../components/MiniStats";

const FriendStats = () => {
    const animalsList = [
        "M_Mcflyyy",
        "shaepods",
        "stilreign",
      ];
    return ( 
        <div className="bottom-stats">
        <MainPlayers
          players={animalsList}
          renderPlayer={(playerData, index) => (
            <div>
              <h2>{playerData.account.name}</h2>
              <MiniStats key={index} stats={playerData} brType="solo"/>
              <MiniStats key={index} stats={playerData} brType="duo"/>
              <MiniStats key={index} stats={playerData} brType="squad"/>
            </div>
          )}
        />
      </div>
     );
}
 
export default FriendStats;