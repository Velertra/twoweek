import React, { useState } from "react";
import { socket } from '../socket';

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSavedName(true);
    try {
      const response = await fetch(
        "http://localhost:3200/messages" /* || import.meta.env.VITE_PORT_URL */,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            body: message, 
            name: name 
          }),
        },
      );

      const data = await response.json();
      console.log(data)
      setMessage("");
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-form" id="message-form">
      {savedName ? (
        <p>{name}</p>
      ) : (
        <label>
          <input
            placeholder="name"
            className="name-input"
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      )}
      <label>
        <input
          placeholder="message"
          className="message-input"
          id="message-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button className="message-btn" id="message-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ChatForm;
