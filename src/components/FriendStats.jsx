import { useEffect, useState } from 'react';
import ApiFunction from '../utilities/ApiFunction'

const FriendStats = ({ selectedPlayer }) => {
    const [data, setData] = useState()

    const fetchPlayerData = async (player) => {
        const response = await ApiFunction(player);
        return response.data;
      };

      useEffect(() => {
        const playerData = fetchPlayerData(selectedPlayer)
        setData(playerData)
      }, [selectedPlayer])

      

    return ( 
        console.log(data.stats)
     );
}
 
export default FriendStats;