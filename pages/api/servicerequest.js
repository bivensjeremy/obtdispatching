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
        subject:  `OBT Request Form`,
        html:       `
                <table>
                    <tr>
                        <th>Name:</th>
                        <td>${req.body.fName} ${req.body.lName}</td>
                    </tr>
                    <tr>
                        <th>Company Name:</th>
                        <td>${req.body.cName}</td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td>${req.body.Email}</td>
                    </tr>
                    <tr>
                        <th>Street Address:</th>
                        <td>${req.body.Address}</td>
                    </tr>
                    <tr>
                        <th>City:</th>
                        <td>${req.body.City}</td>
                    </tr>
                    <tr>
                        <th>State:</th>
                        <td>${req.body.State}</td>
                    </tr>
                    <tr>
                        <th>Zip:</th>
                        <td>${req.body.Zip}</td>
                    </tr>
                    <tr>
                        <th>Dispatch Request Information</th>
                    </tr>
                    <tr>
                        <th>Trailer Type:</th>
                        <td>${req.body.tType}</td>
                    </tr>
                    <tr>
                        <th>Freight Guard:</th>
                        <td>${req.body.freightGuard}</td>
                    </tr>
                    
                        <tr>
                            <th>48 States:</th>
                            <td>${req.body.region48}</td>
                        </tr>
                        <tr>
                            <th>Southeast: </th>
                            <td>${req.body.Southeast}</td> 
                        </tr>
                        <tr>
                            <th>Southwest: </th>
                            <td>${req.body.Southwest}</td> 
                        </tr>
                        <tr>
                            <th>Northeast: </th>
                            <td>${req.body.Northeast}</td>
                        </tr>
                       <tr>
                            <th>Midwest: </th>
                            <td>${req.body.Midwest}</td> 
                       </tr>
                        <tr>
                            <th>West Coast: </th>
                            <td>${req.body.WestCoast}</td> 
                        </tr>
                </table>
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