import { useState, useEffect } from 'react';
import PlayerDiv from '../utilities/MainPlayers';
import BottomDivs from '../components/StatsDisplay';
import ImageComponent from '../components/ImageComponent';
import FriendStats from '../components/FriendStats'

export default function MainPage(){

    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign", "buckwildhobbit"];

    return (
        <>
            <div className="bottom-stats">
                <FriendStats
                    selectedPlayer="M_Mcflyyy"
                />
            {/* <PlayerDiv
                players={animalsList}
                renderPlayer={(playerData, index) => (
                    <BottomDivs
                        key={index}
                        stats={playerData}
                    />
                    
                )}
            /> */}
            </div>
        </>
    )
}