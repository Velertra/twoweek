var { Server } = require("socket.io");

const io = new Server({
    cors: {
      origin: "http://localhost:5173" || "https://twoweek.vercel.app/"
    }
  });

module.exports = io;