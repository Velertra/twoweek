const Message = require("../model/message");
const io = require("../socket");

const chatController = {};

const createNewMessage = async (req, res) => {
  const { body, name } = req.body;

  try {
    const newMessage = new Message({
      body: body,
      name: name,
    });

    await newMessage.save();

    io.emit('newMsg', newMessage)

    res.json({ message: "Message created successfully" });
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllMessages = async (req, res) => {
  try {
    /* const messages = await Message.find({
            $or: [
                { name: name, body: body },
                { name: body, body: name },
            ],
        }).sort({ createdAt: 'asc' }); */
    const messages = await Message.find();
    res.json({ messages: messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteMessage = async (req, res) => {
  const messageId = req.params.id;

  try {
    await Message.findByIdAndDelete(messageId);

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createNewMessage,
  getAllMessages,
  deleteMessage,
};
