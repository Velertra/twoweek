import React, { useEffect, useState } from 'react';

const DisplayMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function getMessages(messages){
            const response = await fetch(import.meta.env.PORT || "http://localhost:3200/messages")
            const data = await response.json();
            setMessages(data.messages)
        }
        return (() => getMessages())
        
    }, [])

    return ( 
        <>
            <div className='text-area' id='text-area'>
                {console.log(messages)}
                {messages ? messages.map((message, index) => (
                    <div className={`message-${index} messages`} id={`message-${index} messages`} key={index}>
                        <h3 className={`name-${index}`} id={`name-${index}`}>{message.name}</h3>
                        <p className={`sms-${index}`} id={`sms-${index}`}>{message.body}</p>
                    </div>
                ))
                :
                <div></div>}
            </div>
        </>
     );
}
 
export default DisplayMessages;