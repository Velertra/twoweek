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
            <MiniStats key={index} stats={playerData}/>
          )}
        />
      </div>
     );
}
 
export default FriendStats;