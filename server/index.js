const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/sendemail', (req, res) => {
  console.log('inside get route');
  res.status(200).send('accessed the GET route!');
});

app.post('/sendemail', (req, res) => {
  const { firstName, lastName, verb, stake } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TEST_EMAIL,
    subject: `${firstName} ${lastName} ${verb} today!`,
    text: `And I haven't lost $${stake}! Thanks for holding my feet to the fire. - ${firstName}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(404).send(`Error in sending email: ${error}`)
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send("Email sent!");
    }
  });
});

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

