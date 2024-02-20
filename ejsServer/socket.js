const { Server } = require("socket.io");
const http = require("http");
const express = require('express');

const app = express();

const server = http.createServer(app);

const origin = process.env.PROD_ENV === 'production' ?  'https://twoweek.vercel.app' : 'http://localhost:5173';

const io = new Server(server, {
  cors:{
    origin: origin,
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log("user connected");

  socket.on('disonnect', () => {
    console.log("user disconnected")
  })
});

module.exports = {app, server, io};