import { useState, useEffect } from "react";
import PlayersNewDiv from "../utilities/MainPlayers";

export default function DivsWithTheStats({ stats, searchStatus }) {
  return (
    <>
      {!searchStatus ? (
        <div className={"player-stats"}>
          {stats.length !== 0 ? (
            <div>{JSON.stringify(stats.account.name)}</div>
          ) : (
            <div></div>
          )}
          {stats.length !== 0 ? (
            <div className="stats-container" id="stats-container">
              {Object.values(stats.stats.all.solo).map((stats, index) => {
                return (
                  <div className="stats-div" key={index}>
                    {stats}{" "}
                  </div>
                );
              })}
            </div>
          ) : (
            " this Aint right "
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
