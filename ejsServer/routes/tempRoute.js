//delete for new signin
const express = require("express");
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get("/", async (req, res) => {
  res.send("server side");
});

router.post("/messages", messageController.createNewMessage);

router.get("/messages", messageController.getAllMessages);

//router.delete("/:id", messageController.deleteMessage);

module.exports = router;