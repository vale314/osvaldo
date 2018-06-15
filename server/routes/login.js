const router = require('express').Router();
const path = require('path');
const passport = require('passport');

router.post('/admin',(req,res,next)=>{
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
    
        
        return res.json({
          success: true,
          message: 'You have successfully logged in!',
          token,
          user: userData,
          status:200
        });
      })(req, res, next);


})

module.exports = router;
