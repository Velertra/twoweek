var { Server } = require("socket.io");
require("dotenv").config();

//const origin = process.env.PROD_ENV === 'production' ? "https://twoweek.vercel.app/" : "http://localhost:5173";

const io = new Server(/* {
    cors: {
      origin: origin
    }
    
  } */);

module.exports = io;