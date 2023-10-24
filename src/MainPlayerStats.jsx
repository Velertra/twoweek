import { useEffect, useState } from "react";
import ApiFunction from "./ApiFunction";

export default function DisplayMainPlayers() {
    const [displayData, setDisplayData] = useState({
      
});
    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign"];
    const playersData = []

    useEffect(() => {
        let useEffectSwitch = true
        if (useEffectSwitch) {
            async function mainPlayerData() {
                for (const players in animalsList) {
                    const result = await ApiFunction(animalsList[players])
                    playersData.push(result)
                }
            }
            useEffectSwitch = false;
            mainPlayerData();
        }
        
        setDisplayData(playersData)

        return () => useEffectSwitch = false;
    },[displayData.data])


console.log(displayData[0].data)

    return (
        <>
            <h1>such a nice day</h1>
            <h2>{displayData ? 'title space' :title}</h2>
        </>
    )

}




/* import { useEffect, useState } from "react";

export default function DisplayMainPlayers() {
    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign"];
 
    useEffect(() => {
        let useEffectSwitch = true
        async function mainPlayerData() {
            for (const players in animalsList) {
                console.log('animalsList')
            }
        }
        if (useEffectSwitch) {
            mainPlayerData()
        }
        return () => useEffectSwitch = false;
    });

    return (
        <>
            <h1>such a nice day</h1>
            <h2>{displayData ? 'title space' :title}</h2>
        </>
    )
};
 */

