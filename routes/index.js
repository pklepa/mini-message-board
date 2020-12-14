var express = require("express");
var router = express.Router();
var dateFns = require("date-fns");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messaging Board",
    messages: messages.map((msg) => {
      return { ...msg, time: dateFns.formatDistanceToNow(msg.added) };
    }),
  });
});

/* POST new page. */
router.post("/new", function (req, res, next) {
  const newMsg = req.body;
  messages.push({
    text: newMsg.text,
    user: newMsg.author,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
