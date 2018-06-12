const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


router.get('/email',(req,res)=>{
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'osvaldorouv@gmail.com', // generated ethereal user
                pass: 'contrasena1#' // generated ethereal password
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }
        });



                
        fs.readFile(__dirname + '../email/index.html', function(err, html) {
            if(err){
                console.log(err)
            }
                html= String(html)

                html = html.replace("{ name }", 'Valentin');
           
                // setup email data with unicode symbols

                let mailOptions = {
                    from: '"IMPACT" <osvaldorouv@gmail.com>', // sender address
                    to: 'electrovale314@hotmail.com',  // list of receivers
                    subject: 'Gracias Por Confiar En Nosotros', // Subject line
                    text: 'Hello world?', // plain text body
                    html: html // html body
                };
            
                // send mail with defined transport object

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
                });
            });
        });    


})

router.get('/item/:id',(req,res)=>{
    console.log(req.params)
    res.json({image:'url'}).status(200)
})

router.get('/items',(req,res)=>{
    console.log(req.params)
    res.json({image:'urls'})
})

module.exports = router;
