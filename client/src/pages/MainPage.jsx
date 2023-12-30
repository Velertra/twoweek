import { useState, useEffect } from 'react';
import PlayerDiv from '../utilities/MainPlayers';
import BottomDivs from '../components/StatsDisplay';
import ImageComponent from '../components/ImageComponent';
import FriendStats from '../components/FriendStats'
import SearchBar from '../components/SearchBar';
import DisplayMessages from '../components/DisplayMessages';

export default function MainPage(){

    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign", "buckwildhobbit"];

    
    return (
        <> 
            {/* < SearchBar 
            /> */}
            <DisplayMessages />

            <div className="bottom-stats">
                {/* {animalsList.map((player, index) => 
                    <FriendStats
                        key={index} 
                        selectedPlayer={player}
                    />
                )} */}
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