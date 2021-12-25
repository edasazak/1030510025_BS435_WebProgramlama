const express = require('express');

const router = express.Router();

router.get('/matches',(req, res)=>{
   if(!req.user){
       res.status(401).send();
       return;
   }
   const payload = kediSec();
   res.status(200).json(payload);
});

module.exports = router;