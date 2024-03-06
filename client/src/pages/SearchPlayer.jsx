import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getPlayerStats} from "../utilities/ApiFunction";
import MiniStats from "../components/MiniStats";

const SearchPlayer = () => {
    const [playerData, setplayerData] = useState();
    const [error, setError] = useState(false);
    const {player} = useParams();
    
    useEffect(() => {
        let abortController = new AbortController();

        async function getPlayerData() {
            let response = await getPlayerStats(player, {
            signal: abortController.signal,
            });

            if (!response) {
                setError(true); 
            }
        
            if(!abortController.signal.aborted) {
                let data = await response;
                console.log(data)
                setplayerData(data);
            }
        }

        if(player) {
        getPlayerData();
        }

        return() => {
            abortController.abort();
        }
    }, [player])

    return ( 
        <div className="main-content">
        {playerData 
        ? 
        <div className="stats-display">
            <h2 className="player-name">{playerData.data.account.name}</h2>
            <h3>Level {playerData.data.battlePass.level}</h3>
            <div className="multi-stats-display">
                <MiniStats

                    stats={playerData.data}
                    brType='solo'
                /> 
                <MiniStats
                    stats={playerData.data}
                    brType='duo'
                /> 
                <MiniStats
                    stats={playerData.data}
                    brType='squad'
                />
            </div>
        
        </div>
        : 
        <div>{error ? "No Stats to show" : "Loading..."}</div>}
        </div>
     );
}
 
export default SearchPlayer;