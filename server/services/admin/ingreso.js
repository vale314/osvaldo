const Admins = require('mongoose').model('Admins');

function New(){
      const userData = {
        email: "usuario@hotmail.com",
        password: "contrasena",
        name: "Usuario"
      };
       const newUser = new Admins(userData);

      newUser.save((error)=>{
        if(error){
          return (error);
        }
        console.log('restaurado');
      });
}

module.exports.New=New;