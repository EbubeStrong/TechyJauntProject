const nodemailer = require('nodemailer');

const sendGmail = async (email, emailVerificationToken) => {
 
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
    subject: 'Verify your email address',
    html: `<p>Hi,</p>
    <br>
    <p>Thanks for signing up! Please verify your email address by clicking the link below</p>
    <a href="http://localhost:5000/v1/users/verify-email?emailVerificationToken=${emailVerificationToken}"  style="
             display: inline-block;
             padding: 7px 14px;
             color: #ffffff; 
             background-color: #000000; 
             text-decoration: none; 
             border-radius: 5px;
           ">Verify Email</a>
    <p>If you did not request this, please ignore this email.</p>`
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