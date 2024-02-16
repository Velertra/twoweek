const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.DATABASE_URI;

async function mongoDb() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    db.once("open", () => {
      console.log("Connected to MongoDB!");
    });

    // Other code
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = mongoDb;