import React, { useEffect, useState } from "react";
import { socket } from '../socket'

const DisplayMessages = () => {
  const [messages, setMessages] = useState([]);
  
  const url = import.meta.env.VITE_NODE === 'production' ? import.meta.env.VITE_PORT_URL : 'http://localhost:3200/messages';

  useEffect(() => {
    async function getMessages(messages) {
      const response = await fetch(
        url,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      setMessages(data.messages);
    }
    getMessages();
    
  }, []);

  useEffect(() => {
    socket.on('newMsg', (msg) => {
      const newArr = [...messages, msg];
      setMessages(() => newArr);
    })
    
    return () => {
      socket.off('newMsg');
    }
  })



  return (
    <>
      <div className="text-area" id="text-area">
        {messages ? (
          messages.map((message, index) => (
            <div
              className={`message-${index} messages`}
              id={`message-${index} messages`}
              key={index}
            >
              <h3
                className={`name-${index} user-name`}
                id={`name-${index} user-name`}
              >
                {message.name}
              </h3>
              <p className={`sms-${index} sms`} id={`sms-${index} sms`}>
                {message.body}
              </p>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default DisplayMessages;
