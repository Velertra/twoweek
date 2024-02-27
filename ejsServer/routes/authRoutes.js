var express = require("express");
var { login, logout, signup } = require("../controllers/authController.js");

var router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

module.exports = router;