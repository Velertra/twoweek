import React, { useEffect, useState } from 'react'
import '../src/styles/App.css'
import FriendDiv from './components/FriendPlayersPage'
import SearchBar from './components/SearchBar'
import ProfileStats from './components/DisplaySearched'

export default function App() {
  
  return (
    <>
      <SearchBar />
      <h1>Two Week Stats</h1>
      <div className="bottom-stats">
        <FriendDiv />
      </div>
      <div className="profile-pop-up">
        {/* <ProfileStats 

        /> */}
      </div>
    </>
  )
}


