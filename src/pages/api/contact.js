
export default function (req, res) {
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

  const mailData={
    from: 'asofanati145@gmail.com',
    to: 'ahmadsof4@gmail.com',
    subject: `Message From ${req.body.name} `,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
   
  })
  res.send('success')
}