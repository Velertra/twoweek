import React, { useState } from 'react';

const ChatForm = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to add a message
    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: message, name: name }),
      });

      const data = await response.json();
      console.log(data);

      // Clear the input fields after submitting
      setMessage('');
      setName('');
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ChatForm;
