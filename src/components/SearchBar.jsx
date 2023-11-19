import { useState } from 'react';
import StatsDisplay from './StatsDisplay';
import ApiFunction from '../utilities/ApiFunction'

const SearchBar = () => {
    const [text, setText] = useState('');
    const [showDiv, setShowDiv] = useState(false);
    const [playerData, setPlayerData] = useState([]);

    function handleChange(e){
        setText(e.target.value);
    }

    async function handleKeyDown(e){
        if(e.key === 'Enter'){
            const playerResults = await ApiFunction(text);
            setPlayerData(playerResults.data);
            setShowDiv(true);
            setText('');
        }
    }
    
    return ( 
        <>
            <input
                id="search-bar"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <div>
                {showDiv ? (
                    <div>
                        <StatsDisplay 
                            stats={playerData}
                        />
                        <button onClick={(() => setShowDiv(false))}>close</button>
                    </div>
                ) : null}
            </div>
        </>
     );
}
 
export default SearchBar;