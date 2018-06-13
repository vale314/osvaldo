var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');

function generateToken(req){
    
    var hashedPassword = generateHash(req)
    


      var token = jwt.sign({ id: 0, username:req.body.loginData.username }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
       return ({ auth: true, token: token });
   
} 


function generateHash(req){
    return (bcrypt.hashSync(req.body.loginData.password, 10))
}

module.exports={
    generateToken:generateToken,
    generateHash:generateHash
}