const Message = require('../models/message');

const messagesController = {
  getAllMessages: async (req, res) => {
    try {
      const messages = await Message.find().sort({ timestamp: 1 });
      res.json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createMessage: async (req, res) => {
    const { sender, content } = req.body;

    try {
      const newMessage = new Message({ sender, content });
      const savedMessage = await newMessage.save();
      res.status(201).json(savedMessage);
    } catch (error) {
      console.error('Error creating message:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = messagesController;