import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/styles/App.css'
//import DisplayMainPlayers from '../src/components/MainPlayerStats'

export default function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <h1>Two Week Stats</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <DisplayMainPlayers /> */}
      </div>
    </>
  )
}


//const animalsList = ["M_Mcflyyy", "M_Mcflyyy", "shaepods", "stilreign"];

