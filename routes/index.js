var express = require("express");
var router = express.Router();
var dateFns = require("date-fns");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: dateFns.format(new Date(), "dd/MMM/y '-' hh:mm:ss"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: dateFns.format(new Date(), "dd/MMM/y '-' hh:mm:ss"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messaging Board", messages: messages });
});

/* POST new page. */
router.post("/new", function (req, res, next) {
  const newMsg = req.body;
  messages.push({
    text: newMsg.text,
    user: newMsg.author,
    added: dateFns.format(new Date(), "dd/MMM/y '-' hh:mm:ss"),
  });

  res.redirect("/");
});

module.exports = router;
