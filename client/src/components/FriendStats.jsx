import { useEffect, useState } from "react";
import {getPlayerStats} from "../utilities/ApiFunction";

const FriendStats = ({ selectedPlayer }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const getPlayerData = async () => {
        const playerData = await fetchPlayerData(selectedPlayer);

        setData((previous) => [...previous, playerData.duo]);
      };
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedPlayer]);

  const fetchPlayerData = async (player) => {
    const response = await getPlayerStats(player);

    return response.data.stats.all;
  };

  return (
    <>
      {
        /* selectedPlayer ? Object.values(data).map((stats, index) => <p key={index}>{stats}</p>)
        : */ <div>not working, come back later</div>
      }
    </>
  );
};

export default FriendStats;
