const express = require('express');
const router = express.Router();
const chatController = require('../controllers/messageController');

router.get('/', (req, res) => {
    res.send('Server side')
    /* try {
        const allMessages = await chatController.getAllMessagesFromDatabase();
        res.json({ messages: allMessages });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } */
})

router.post('/messages', chatController.createNewMessage);

router.get('/:sender/:receiver', chatController.getAllMessages);

router.delete('/:id', chatController.deleteMessage);

module.exports = router;