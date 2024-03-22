import React, { useState } from "react";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSavedName(true);
    const url = import.meta.env.VITE_NODE === 'production' ? import.meta.env.VITE_PORT_URL : 'http://localhost:3200/messages';
    
    try {
      const response = await fetch(
        url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            body: sanitizeText(message), 
            name: sanitizeText(name) 
          }),
        },
      );

      const data = await response.json();
     
      setMessage("");
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  function sanitizeText(result){
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27',
        "/": '&#;',
    }
    const reg = /[&<>"'/]/ig;
    return result.replace(reg, (match) => (map[match]));
  }

  return (
    <div className="compose-message">
      <div className="message-inputs">
        <form onSubmit={handleSubmit} className="message-form" id="message-form">
          {savedName ? (
            <p className="name-input">{name}</p>
          ) : (
            <label>
              <input
                placeholder="name"
                className="name-input"
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
              required
            />
          </label>
          <button className="message-btn" id="message-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
