import { useState } from 'react';
import PlayerDiv from '../components/PlayerComponent'

export default function FriendStats(){
    const animalsList = ["M_Mcflyyy", "shaepods", "stilreign"];

    return (
        <>
            {animalsList.map((player, index) => 
                <PlayerDiv
                    key={index}
                    playerName={player} 
                />
            )}
        
        </>
    )
}