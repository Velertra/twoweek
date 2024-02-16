Certainly! Here's the updated README with the correct instructions:

TwoWeek (Game Data) README
Project Overview
TwoWeek (Game Data) is a web application that displays players statistics from a video game. Users can easily look up any player to view their in-game stats. Additionally, there is an ongoing feature development to include a mini chat box for visitors to leave messages.

Installation

This project requires a MongoDB database to store data.

run in client folder, as well as ejsServer folder:

   $ npm install

This command will automatically download and install the necessary packages for your project.

then run:

    $ npm run dev

To start the development server, run the following command on server side:

npm run devstart

Running Locally 
    "Error adding Message"

    -in the NewMessage.jsx file i had to delete that add back any part of the function in order for it to run.

    <del>Make sure to comment out the Vite Url on the client side in NewMessage.jsx file(line 12)</del>

<del>Otherwise needs a url for the server.</del>



Follow these steps to set up MongoDB:

1. Sign up for a MongoDB account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster and configure it according to your requirements.
3. Obtain the connection string for your MongoDB cluster.
4. Create a `.env` file in the root directory of your project.
5. Add your MongoDB connection string to the `.env` file using the following format:

   ```plaintext
   MONGODB_URI=<your-mongodb-connection-string>


