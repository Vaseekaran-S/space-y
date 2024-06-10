const nodemailer = require("nodemailer")
const ejs = require("ejs")

// Setup a POSTMAN
const bot_mail = process.env.MAIL_BOT_ID
const postman = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: bot_mail,
        pass: process.env.MAIL_BOT_PASS
    }
})

// Funtion to send Mail
const sendMail = (mailOptions) => {
    postman.sendMail(mailOptions, (err, info)=>{
        if(err) {
            return { status: 500, msg: err.message };
        }
        return { status: 200, msg: 'Email sent: ' + info.response };
    })
}

// Welcome Mail to New User
const sendSignUpMail = async(data) => {
    try{
        ejs.renderFile(__dirname+"/mail/signup.ejs", { data }, (err, htmlFile) => {
            if(err) return { status: 500, msg: "Mail not Send!" }
            const mailOptions = {
                from: bot_mail,
                to: data?.email,
                subject: `Welcome to Space Y, ${data?.name}! Let's Dive In!`,
                html: htmlFile
            }
            return sendMail(mailOptions)
        })
    }catch(err){
        return { status: 500, msg: err.message };
    }
}

module.exports = {
    sendSignUpMail
}