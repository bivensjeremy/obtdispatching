export default function handler (req, res) {
    require('dotenv').config()
    const HOST = process.env.NEXT_PUBLIC_HOST
    const PASS = process.env.NEXT_PUBLIC_PASS
    const USER = process.env.NEXT_PUBLIC_USER

    const nodemailer = require('nodemailer')
    const smtpTrans = nodemailer.createTransport({
        host: HOST,
        port: 465,
        secure: true,
        auth: {
            user: USER,
            pass: PASS
       }
    });
    const mailOpts = {
        from:     'invalidemail@obtdispatchingservice.com',
        replyTo: `${req.body.Email}`,
        to:       'info@obtdispatchingservice.com',
        subject:  `Message from OB&T!`,
        html:       `
                    <h4><b>Name:</b></h4> ${req.body.Name} <br> 
                    <h4><b>Phone:</b></h4> ${req.body.Phone} <br> 
                    <h4><b>Email:</b></h4> ${req.body.Email} <br> 
                    <h4><b>Message:</b></h4> ${req.body.Message}
                    `
    }
    smtpTrans.sendMail(mailOpts, function(err, success) {
        if (err) {
            res.json({
                status: 'fail'
            })
            console.log(err)
            } else {
                res.json({
                status: 'success'
                })
        }
    });
};