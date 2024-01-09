import React, { useState } from "react";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        import.meta.env.VITE_PORT_URL || "http://localhost:3200/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: message, name: name }),
        },
      );

      const data = await response.json();
      setMessage("");
      setName("");
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-form" id="message-form">
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
