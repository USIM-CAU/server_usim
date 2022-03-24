const express = require('express')
const app = express()

app.get('',function(req,res){
	res.send('Hello Capstone!');
});

app.listen(3000);

console.log(`API Server Start At Port 3000`);