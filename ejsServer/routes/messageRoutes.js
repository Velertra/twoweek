//new message route
/* var express = require('express');
const sendMessage = require('../controllers/messageController.js');
const protectRoute = require('../middleware/protectRoute.js');

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage)

module.exports = router; */




//old message route
/* const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/", async (req, res) => {
  res.send("server side");
});

router.post("/messages", messageController.createNewMessage);

router.get("/messages", messageController.getAllMessages);

router.delete("/:id", messageController.deleteMessage);

module.exports = router; */