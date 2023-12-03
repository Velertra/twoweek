import { useEffect, useState } from 'react';
import ApiFunction from '../utilities/ApiFunction'

const FriendStats = ({ selectedPlayer }) => {
    const [data, setData] = useState('')

    const fetchPlayerData = async (player) => {
        
      const response = await ApiFunction(player);
      //setTimeout(() => {  
      return response.data.stats.all;
      //}, 2000)
      };
      
      useEffect(() => {
        const getPlayerData = async () => {
          const playerData = await fetchPlayerData(selectedPlayer);
          
            setData(playerData.duo);
          
        }

         return () => {
            getPlayerData();
         }
            
      }, [])

    return ( 
      <>
        {Object.values(data).map((stats, index) => <p key={index}>{stats}</p>)}
      </>
     );
}
 
export default FriendStats;