//delete for new signin
const Message = require("../model/tempMessage")
const { io } = require("../socket");

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
    //const messages = await Message.find({
    //        $or: [
    //            { name: name, body: body },
    //            { name: body, body: name },
    //        ],
    //    }).sort({ createdAt: 'asc' });
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



//new message controller for signin
/* const Conversation = require('../model/conversationModel')
const Message = require('../model/messageModel')

const sendMessage = async (req, res) => {
    try{
      const {message} = req.body;
      const {id: receiverId } = req.params;
      const senderId = req.user._id;

      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
      })

      if(!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        
        })
      }

      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      })

      if(newMessage) {
        conversation.messages.push(newMessage._id);
      }

      //await conversation.save();
      //await newMessage.save();

      await Promise.all([conversation.save(), newMessage.save()]);

      res.status(201).json(newMessage)

    } catch {
      console.log("Error in sendMessage controller: ", error.message);
      res.status(500).json({ error: "Internal server error"});
    }
  
};

module.exports = sendMessage; */