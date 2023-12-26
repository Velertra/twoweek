var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Echo",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Message', 
    messages: messages });
});

router.post('/new', function(req, res, next) {
  const whatTheySaid = req.body.whatTheySaid;
  const whoWroteThis = req.body.whoWroteThisl;
  messages.push({text: whatTheySaid, user:whoWroteThis, added: new Date()});
  res.redirect('/');
})

module.exports = router;
