import { useState } from 'react'

const DisplaySearched = () => {
    const [showDiv, setShowDiv] = useState(true);

    return ( 
        <div>
            {showDiv ? (
                <div>
                    checkechkechk
                </div>
            ) : null}
            <button onClick={() => setShowDiv(!showDiv)}>
                Toggle Div
            </button>
        </div>
    );
}
 


export default DisplaySearched;