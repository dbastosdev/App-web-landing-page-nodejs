// import external module for send mail
const nodemailer = require("nodemailer");

// Get actual date
let date = new Date();
let day  = date.getDate()
let month  = date.getMonth()
let year  = date.getFullYear()
let hour = date.getHours()       
let min  = date.getMinutes()     

// mail data
const $user = 'xxxxxxxxxx@gmail.com' // write your e-mail here
const $senha = 'xxxxxxxxxxx'              // write your password here


// async function for send email. See more in https://nodemailer.com/about/
async function main(titulo, grupo, mensagem) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // write your smtp email host here
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: $user, 
      pass: $senha, 
    },
  });

  // Get sinapi data with bot-scrap
  const message = mensagem

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Sua marca" <xxxxxxxxxx@gmail.com>', // sender address
    to: `${grupo}`, // list of receivers
    subject: `${titulo} ${day}/${month}/${year} - ${hour}:${min}`, // Subject line
    text: "Landing page email", // plain text body
    html: `${message}` // html body
  });

  console.log(`Mail sent - ${day}/${month}/${year} - ${hour}:${min}`);
}

module.exports = {
    main
}