import { useState, useEffect } from "react";
import MainPlayers from "../utilities/MainPlayers";
import StatsDisplay from "../components/StatsDisplay";
import FriendStats from "../components/FriendStats";
import DisplayMessages from "../components/DisplayMessages";
import ChatForm from "../components/NewMessage";
import SearchBar from "../components/SearchBar";
import MiniStats from "../components/MiniStats";

export default function MainPage() {

  return (
    <>
      <div className="chat-section" id="chat-section">
        <DisplayMessages />
        
        <ChatForm />
      </div>
    </>
  );
}
