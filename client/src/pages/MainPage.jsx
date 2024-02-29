import { useState, useEffect } from "react";
import MainPlayers from "../utilities/MainPlayers";
import StatsDisplay from "../components/StatsDisplay";
import FriendStats from "../components/FriendStats";
import DisplayMessages from "../components/DisplayMessages";
import ChatForm from "../components/NewMessage";
import SearchBar from "../components/SearchBar";
import MiniStats from "../components/MiniStats";
import BlogDisplay from "../components/BlogDisplay";
import trackerApi from "../utilities/trackerApi";

export default function MainPage() {

  useEffect(() => {
    trackerApi();
  },[])

  return (
    <>
      <div className="chat-section" id="chat-section">
        <DisplayMessages />
        
        <ChatForm />
      </div>
      <BlogDisplay />
    </>
  );
}
