import { useState, useEffect } from 'react';
import PlayerDiv from '../utilities/MainPlayers';
import BottomDivs from '../components/StatsDisplay';
import FriendStats from '../components/FriendStats'
import DisplayMessages from '../components/DisplayMessages';
import ChatForm from '../components/NewMessage';

export default function MainPage(){

    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign", "buckwildhobbit"];

    return (
        <> 
            <DisplayMessages />
            <ChatForm />
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