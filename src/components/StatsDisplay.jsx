import { useState, useEffect } from 'react';
import PlayersNewDiv from '../utilities/MainPlayers'

export default function DivsWithTheStats({stats}){

    return (
        <>
            <div className={'player-stats'}>
                {stats.length !== 0 ? (<div>{JSON.stringify(stats.account.name)}</div>) : ( 'yoyoma')} 
                {stats.length !== 0 ? (<pre>{ Object.values(stats.stats.all.solo).map(stats =>  {return <div className="stats-div" key={stats}>{stats} </div>} ) }</pre>) : (' this Aint right ')}  </div>
        </>
    )
}