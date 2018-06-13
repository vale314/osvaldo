const router = require('express').Router();
const path = require('path');
const services = require ("../services/admin/token")
const login = require("../services/admin/login")
const passport = require('passport');

router.post('/login',(req,res,next)=>{
    req.body=req.body.loginData
    return passport.authenticate('local-login', (err, token, userData) => {
        
        if (err) {
          if (err.name === 'IncorrectCredentialsError') {
            return res.status(400).json({
              success: false,
              message: err.message
            });
          }
    
          return res.status(400).json({
            success: false,
            message: 'Could not process the form.'
          });
        }
    
        console.log(userData)
        return res.json({
          success: true,
          message: 'You have successfully logged in!',
          token,
          user: userData,
          status:200
        });
      })(req, res, next);

//    var token = services.generateToken(req)
//    return res.json(token).status(200); 
})

module.exports = router;
