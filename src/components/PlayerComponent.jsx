import { useEffect, useState } from 'react'
import ApiFunction from '../utilities/ApiFunction'

export default function PlayerDisplay({ playerName }){
   const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await ApiFunction(playerName)
            setData(response.data);
            console.log(data)
        }
        fetchData()
    }, [])

    return(
        <>
            {data.length !== 0 ? (<div>{JSON.stringify(data.account.name)}</div>) : ( 'yoyoma')} 
            {data.length !== 0 ? (<pre>{ Object.values(data.stats.all.solo).map(data =>  {return <div key={data}>{data} </div>} ) }</pre>) : (' this Aint right ')}  
        </>
    )
}

