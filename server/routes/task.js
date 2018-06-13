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



                
        fs.readFile(__dirname + '../services/email/index.html', function(err, html) {
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
    res.json({image:'one-item'}).status(200)
})

router.get('/items',(req,res)=>{
    console.log(req.params)
    res.json({image:'items'})
})

router.get('/images',(req,res)=>{
    console.log(req.params)
    res.json({image:'images'})
})

router.get('/about-us-text',(req,res)=>{
    console.log(req.params)
    res.json({text:'about-us-texto'})
})

router.get('/about-us-icons',(req,res)=>{
    console.log(req.params)
    res.json({url:'about-us-icons'})
})

router.get('/about-us-profiles',(req,res)=>{
    console.log(req.params)
    res.json({url:'about-us-profiles'})
})

router.get('/services-main-icons',(req,res)=>{
    console.log(req.params)
    res.json({url:'services-main-icons'})
})

router.get('/services-secondary-icons',(req,res)=>{
    console.log(req.params)
    res.json({url:'services-secondary-icons'})
})

router.get('/services-secondary-services',(req,res)=>{
    console.log(req.params)
    res.json({url:'services-secondary'})
})

router.get('/contact',(req,res)=>{
    console.log(req.params)
    res.json({url:'contact'})
})

router.get('/blog',(req,res)=>{
    console.log(req.params)
    res.json({url:'Blog'})
})

router.get('/carusel-text',(req,res)=>{
    console.log(req.params)
    res.json({url:'carusel-text'})
})

router.get('/comments',(req,res)=>{
    console.log(req.params)
    res.json({url:'comments'})
})

router.get('/maps',(req,res)=>{
    console.log(req.params)
    res.json({url:'maps'})
})

router.get('/comment',(req,res)=>{
    console.log(req.params)
    res.json({url:'comment'})
})

router.get('/footer',(req,res)=>{
    console.log(req.params)
    res.json({url:'footer'})
})

router.get('/price',(req,res)=>{
    console.log(req.params)
    res.json({url:'price'})
})

router.get('/stats',(req,res)=>{
    console.log(req.params)
    res.json({url:'stats'})
})


module.exports = router;
