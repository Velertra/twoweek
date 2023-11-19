import { useState, useEffect } from 'react';
import PlayerDiv from '../utilities/MainPlayers';
import BottomDivs from '../components/StatsDisplay';
import IconImages from '../components/DisplayImages';
import SearchBar from '../components/SearchBar';

export default function FriendStats(){

    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign", "buckwildhobbit"];

    return (
        <>
            <SearchBar />
            <h1>Two Week Stats</h1>
            <IconImages 
                key={'topdivs'}
            />
            <div className="bottom-stats">
            <PlayerDiv
                players={animalsList}
                renderPlayer={(playerData, index) => (
                    <BottomDivs
                        key={index}
                        stats={playerData}
                    />
                    
                )}
            />
            </div>
        
        </>
    )
}