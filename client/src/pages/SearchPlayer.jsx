import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiFunction from "../utilities/ApiFunction";
import MiniStats from "../components/MiniStats";

const SearchPlayer = () => {
    const [playerData, setplayerData] = useState();
    const [error, setError] = useState(false);
    const {player} = useParams();
    
    function loading(){

    }

    useEffect(() => {
        let abortController = new AbortController();
   
       
            async function getPlayerData() {
                let response = await apiFunction(player, {
                signal: abortController.signal,
                });

                if (!response) {
                    setError(true); 
                    
                }
          
                if(!abortController.signal.aborted) {
                    let data = await response;
                    
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
        <>
        {playerData ? <MiniStats stats={playerData.data} /> : <div>{error ? "No Stats to show" : "Loading..."}</div>}
        </>
     );
}
 
export default SearchPlayer;