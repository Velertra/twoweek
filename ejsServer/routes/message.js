const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', async (req, res) => {
    res.send('server side')
  /*   try {
        const allMessages = await messageController.getAllMessages();
        res.json({ messages: allMessages });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } */
})

router.post('/messages', messageController.createNewMessage);

router.get('/messages', messageController.getAllMessages);

router.delete('/:id', messageController.deleteMessage);

module.exports = router;