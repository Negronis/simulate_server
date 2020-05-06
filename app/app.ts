import express = require('express');
const app: express.Application = express();
app.all('*',(req,res,next)=>{
   res.header("Access-Control-Allow-Origin", "*")
   res.header("Access-Control-Allow-Headers", "X-Requested-With")
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
   res.header("Content-Type", "application/json;charset=utf-8")
   next()
})
app.listen(3000,function(){
   console.log('Example app listening on port 3000!');
});
// 使用router
let user = require('./api');
app.use('/',user);