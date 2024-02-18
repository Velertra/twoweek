var { Server } = require("socket.io");

const io = new Server({
    cors: {
      origin: "http://localhost:5173"
    }
  });

module.exports = io;