import React, { useEffect, useState } from 'react'
import MainPage from './pages/MainPage'
import { Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import ChatForm from './components/NewComp'

export default function App() {
  return (
    <>
      <nav>
        <Link to="fullstats">Full Stats</Link>
      </nav>
      <SearchBar/>
      <ChatForm />
      <MainPage />

    </>
  )
}


