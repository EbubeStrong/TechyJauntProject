const nodemailer = require('nodemailer');

const sendGmail = (email, emailVerificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: `"Dwella Team" <${process.env.EMAIL_USER}>`,
    to: `${email}`,
    subject: 'Please verify your email.....',
    html: `<p>Hi there, verify your email by clicking on this</p>
    <br>
    <p>"http://localhost:5000/v1/users/verify-email?emailVerificationToken=${emailVerificationToken}"</p>`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  });
}


module.exports = sendGmail;