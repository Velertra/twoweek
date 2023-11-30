const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const messagesRoute = require('./routes/messageRoute');

const app = express();
const PORT = process.env.PORT || 3001;


mongoose.connect('mongodb+srv://Velerta43:aklGXZWUEJ33BNwS@chat.6qge1bw.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

app.use('/api/messages', messagesRoute); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
