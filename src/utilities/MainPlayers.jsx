import { useState, useEffect } from 'react';
import ApiFunction from '../utilities/ApiFunction'; 

//call renderPlayer to enter your own return. lets you pull the data for any player then return any render
export default function FriendStats({ renderPlayer, players }) {
  const [currentPlayer, setcurrentPlayer] = useState(0);
  const [data, setData] = useState([]);

  const fetchPlayerData = async (player) => {
    const response = await ApiFunction(player);
    return response.data;
  };

  useEffect(() => {
    if (currentPlayer < players.length) {
      const player = players[currentPlayer];
      fetchPlayerData(player).then((playerData) => {
        setData([...data, playerData]);
        setcurrentPlayer(currentPlayer + 1);
      });
    }
  }, [currentPlayer]);

  //delay for array
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPlayer < players.length) {
        setcurrentPlayer(currentPlayer + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPlayer]);

  return (
    <>
      {data.map((playerData, index) => (
        renderPlayer(playerData, index)
      ))}
    </>
  );
}
