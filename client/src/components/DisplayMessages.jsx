import React, { useEffect, useState } from "react";

const DisplayMessages = () => {
  const [messages, setMessages] = useState([]);
  const railwayURL = import.meta.env.VITE_PORT_URL;

  useEffect(() => {
    async function getMessages(messages) {
      const response = await fetch(
        railwayURL || "http://localhost:3200/messages",
      );
      const data = await response.json();
      setMessages(data.messages);
    }
    getMessages();
  }, []);

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
