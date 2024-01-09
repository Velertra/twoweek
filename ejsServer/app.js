var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var routes = require("./routes/message");
require("dotenv").config();

var app = express();

const mongoose = require("mongoose");
const mongoURI = process.env.DATABASE_URI;

main().catch((err) => console.log(err));

async function main() {
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

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use("/", routes);

module.exports = app;
