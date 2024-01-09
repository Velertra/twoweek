import { useState, useEffect } from "react";
import MainPlayers from "../utilities/MainPlayers";
import StatsDisplay from "../components/StatsDisplay";
import FriendStats from "../components/FriendStats";
import DisplayMessages from "../components/DisplayMessages";
import ChatForm from "../components/NewMessage";
import SearchBar from "../components/SearchBar";

export default function MainPage() {
  const animalsList = [
    "M_Mcflyyy",
    "shaepods",
    "stilreign",
  ];

  return (
    <>
      <SearchBar />
      <div className="chat-section" id="chat-section">
        <DisplayMessages />
        <ChatForm />
      </div>
      <div className="bottom-stats">
        <MainPlayers
          players={animalsList}
          renderPlayer={(playerData, index) => (
            <StatsDisplay key={index} stats={playerData} />
          )}
        />
      </div>
    </>
  );
}
