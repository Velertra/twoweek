const Message = require('../model/message');

const chatController = {};

const createNewMessage = async (req, res) => {
    const { body, sender, receiver } = req.body;

    try {
        const newMessage = new Message({
            body: body,
            sender: sender,
            receiver: receiver,
        });

        await newMessage.save();

        res.json({ message: 'Message created successfully' });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllMessages = async (req, res) => {
    const { sender, receiver } = req.params;

    try {
        const messages = await Message.find({
            $or: [
                { sender: sender, receiver: receiver },
                { sender: receiver, receiver: sender },
            ],
        }).sort({ createdAt: 'asc' });

        res.json({ messages: messages });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteMessage = async (req, res) => {
    const messageId = req.params.id;

    try {
        await Message.findByIdAndDelete(messageId);

        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createNewMessage,
    getAllMessages,
    deleteMessage
};
