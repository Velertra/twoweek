import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/styles/App.css'
//import DisplayMainPlayers from '../src/components/MainPlayerStats'
import PlayerDisplay from './components/PlayerComponent';
import FriendDiv from './components/FriendPlayersPage'

export default function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <h1>Two Week Stats</h1>
      <div className="card">
        {/* <DisplayMainPlayers /> */}
        <FriendDiv />
      </div>
    </>
  )
}


//const animalsList = ["M_Mcflyyy", "M_Mcflyyy", "shaepods", "stilreign"];

