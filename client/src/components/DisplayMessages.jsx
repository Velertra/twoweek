import React, { useEffect, useState } from 'react';

const DisplayMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function getMessages(messages){
            const response = await fetch(`http://localhost:3200/messages`)
            const data = await response.json();
            setMessages(data.messages)
        }
        return (() => getMessages())
        
    }, [])

    return ( 
        <>
            <ul>
                {console.log(messages)}
                {messages ? messages.map((message, index) => (
                    <li key={index}>
                        {message.body}
                        
                    </li>
                ))
                :
                <div>didntwork</div>}
            </ul>
        </>
     );
}
 
export default DisplayMessages;