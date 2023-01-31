var express = require("express");
var router = express.Router();
const mg = require("mailgun-js");

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

/* GET home page. */
router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: `portfolio-contact-form@kellenbavis.world`,
        to: `kellenbavis10@gmail.com`,
        subject: `subject: ${subject} | email: ${email} | name: ${name}`,
        html: `<p>${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "Error in sending email" });
        } else {
          console.log(body);
          res.send({ message: "Email send successfully" });
        }
      }
    );
});

module.exports = router;
