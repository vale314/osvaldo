const router = require('express').Router();
const path = require('path');

router.get('/',(req,res)=>{
    return res.json({status:200}).status(200).end()
})

module.exports = router;
