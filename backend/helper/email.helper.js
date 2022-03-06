const nodemailer = require("nodemailer")

const smtpConfig = { 
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    type:"oauth3",
    service:"gmail",
    auth:{user:"rahma4fadl@gmail.com", pass:"rahmaHelmy12345"},
    tls: {
        rejectUnauthorized: false
    }
   
   
}

const sendEmailVer = async (reciverEmail ,from,sub, text)=>{
    try{
        const transporter = await nodemailer.createTransport(smtpConfig)
        const mailOptions = { to: reciverEmail, from: from, subject :sub, html: text }
        await transporter.sendMail(mailOptions)
    }
    catch(e){ 
        console.log(e.message)
    }
}

module.exports = sendEmailVer