import { useState, useEffect } from 'react';
import PlayerDiv from '../utilities/MainPlayers';
import BottomDivs from '../components/StatsDisplay';
import IconImages from './DisplayImages';

export default function FriendStats(){

    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign", "buckwildhobbit"];

    return (
        <>
            <IconImages 
                        key={'topdivs'}
                    />
            <PlayerDiv
                players={animalsList}
                renderPlayer={(playerData, index) => (
                    <BottomDivs
                        key={index}
                        stats={playerData}
                    />
                )}
            />
        
        </>
    )
}