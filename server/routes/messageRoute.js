const express = require('express');
const router = express.Router();
const messagesControl = require('../cotrollers/messageControl');

router.get('/', messagesControl.getAllMessages);
router.post('/', messagesControl.createMessage);

module.exports = router;
