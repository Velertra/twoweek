import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getPlayerStats from './apiFunction'


function List(props){
  const eachStatArr = props.animalsList.map((animal) => console.log(animal));
}

function App() {
  const [count, setCount] = useState(0)
  const animalsList = ["M_Mcflyyy", "M_Mcflyyy", "shaepods", "stilreign"];

  return (
    <>
      <h1>Two Week Stats</h1>
      <List animalsList={animalsList} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App


/* function List(props){
  console.log(getPlayerStats(props));
  return (
    <>
      {!props.animalsList && <div>Loading...</div>}
      {props.animalsList && props.animalsList.length > 0 && (
        <ul>
          {props.animalsList.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animalsList && props.animalsList.length === 0 && <div>There are no animalsList in the list!</div>}
    </>
  );
} */