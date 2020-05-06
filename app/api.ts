import { Router } from "express";
let express = require('express');
let router:Router = express.Router();
router.post('/login',(req,res)=>{
   res.send('login Success')
})
module.exports = router;