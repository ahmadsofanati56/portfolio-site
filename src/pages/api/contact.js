
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export default  async (req, res) => {
  require('dotenv').config()

  let nodemailer= require('nodemailer')
  const transporter= nodemailer.createTransport({
    port:465,
    host: "smtp.gmail.com",
    auth:{
      user: 'asofanati145@gmail.com',
      pass: process.env.password
    },
    secure:true
  })
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

  const mailData={
    from: 'asofanati145@gmail.com',
    to: 'ahmadsof4@gmail.com',
    subject: `Message From ${req.body.name} `,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});
  res.send('success')
}