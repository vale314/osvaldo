const router = require('express').Router();
const path = require('path');

router.post('/login',(req,res)=>{
   console.log(req.body)
   return res.json({url:'token'}) 
})

module.exports = router;
