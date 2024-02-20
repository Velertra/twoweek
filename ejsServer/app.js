var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const { app } = require("./socket");

var routes = require("./routes/message");
var mongoDb = require("./model/db");

require("dotenv").config();

const origin = process.env.PROD_ENV === 'production' ?  'https://twoweek.vercel.app' : 'http://localhost:5173';

mongoDb()

app.use(cors({
    origin: origin,
    methods: ["GET", "POST"]
}));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

module.exports = app;