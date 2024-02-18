var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var routes = require("./routes/message");
var mongoDb = require("./model/db");

require("dotenv").config();

 var app = express();
 

mongoDb()

app.use(cors({
    origin: 'forgot this one',
    methods: ["GET", "POST"]
}));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

module.exports = app;