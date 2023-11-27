import React, { useEffect, useState } from 'react'
import FriendDiv from './pages/MainPage'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <nav>
        <Link to="fullstats">Full Stats</Link>
      </nav>
      <nav>
        <Link to="anotherpage">another Page</Link>
      </nav>
      <FriendDiv />
      
    </>
  )
}


