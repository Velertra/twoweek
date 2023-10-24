import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayMainPlayers from './MainPlayerStats'

export default function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <h1>Two Week Stats</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <DisplayMainPlayers />
      </div>
    </>
  )
}


//const animalsList = ["M_Mcflyyy", "M_Mcflyyy", "shaepods", "stilreign"];
 /*
function CheckOnApi(){
  const [stats, setStats] = useState([]);

  useEffect(() => {
    
    fetch(Anotherfunction('M_Mcflyyy'))
      .then(response => setStats(response))
      
    console.log(stats)
    const tester = new AbortController();
    return tester.fetch
  }, [setStats])


  return (
    <>
      <div>
        <h1>you aleady know</h1>
        {/* {stats.map(stat => {
          return <pre>{ JSON.stringify(stat) }</pre>
        })} 
        {JSON.stringify(stats)}
      </div>
    </>
  )

}
 */



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


/* 
    
    

    useEffect(() => {
        let effectSwitch = true;
        const controller = new AbortController;
        const signal = controller.signal;
        if (effectSwitch) {
            const tester = async () => {

                /* for (const player in animalsList) {
                    console.log(animalsList[player])
                } 
                
                const resultPromises = await animalsList.map(player => ApiFunction(player));
                const results = await Promise.all(resultPromises);
                
                 
                return results;
            }
   
            
                
            setDisplayData((currentState) => tester())
            
            console.log(displayData)
            }
        return () => {
            effectSwitch = false
        };
    },[]) 


    return (
        <>
            <pre>{displayData.length < 0  ? 'yello' : JSON.stringify(displayData[0]) }</pre>
            <h1>{ }</h1>
           
        </>
) * /

        const playerResult = retrievePlayerData(); */