// require("dotenv").config();
const nodemailer = require("nodemailer");

console.log(process.env.NODEMAILER_PASS);
const sendMail = async () => {
  //   let testAccount = await nodemailer.createTestAccount();

  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 2525,
    auth: {
      user: "howtoqode@gmail.com",
      pass: "howtoqode2023",
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  //   transporter.verify(function (error, success) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Server is ready to take our messages");
  //     }
  //   });

  const mailOptions = {
    from: "howtoqode@gmail.com",
    to: "advamozes@gmail.com",
    subject: "test",
    text: "test",
  };

  transporter.sendMail(mailOptions, (err, seccess) => {
    if (err) console.log(err);
    else console.log("email sent");
  });
};
