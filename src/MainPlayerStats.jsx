import { useEffect, useState } from "react";
import ApiFunction from "./ApiFunction";

export default function DisplayMainPlayers() {
    const [displayData, setDisplayData] = useState([]);
    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign"];
    const playersData = []


    function notSureYet(...props) {
        
        //for (const prop in props) {
            console.log(props[0]);
        //}
    }




    useEffect(() => {
        async function retrievePlayerData() {
            try {
                /* for (const player in animalsList) {

                    const results = await ApiFunction(animalsList[player]);
                    notSureYet(results.data);


                } */


                const resultPromises = animalsList.map(player => ApiFunction(player));
                const results = await Promise.all(resultPromises);
                console.log(results)
            }
            catch {
                console.error(Error, 'This retrievePlayerData Aint working my man')
            }
        }
        
    retrievePlayerData()
    }, []) 
            

    return (
        <>
            <pre>{displayData.length === 0  ? 'yello' : JSON.stringify(displayData.account.name) }</pre>
            <h1>{  }</h1>
        </>
    )
}
